import { useState, useEffect, useMemo } from 'react';
import { defineFrontComponent } from 'twenty-sdk/define';
import { CoreApiClient } from 'twenty-client-sdk/core';
import {
  PieChart, Pie, Cell, Tooltip as RechartsTooltip,
  RadialBarChart, RadialBar, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from 'recharts';

import {
  APP_DISPLAY_NAME,
  MAIN_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
} from 'src/constants/universal-identifiers';

const ORANGE: Record<number, string> = {
  50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74',
  400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c',
  800: '#9a3412', 900: '#7c2d12',
};

const PLATFORM_COLORS: Record<string, string> = {
  LINKEDIN: '#0a66c2', INSTAGRAM: '#E4405F', TIKTOK: '#111',
  YOUTUBE: '#FF0000', REDDIT: '#FF4500', X: '#1DA1F2',
  TELEGRAM: '#0088cc', THREADS: '#111', DS_CS: ORANGE[600],
  MEDIUM: '#00AB6C', SUBSTACK: '#FF6719', LINKEDIN_ARTICLE: '#0a66c2',
};

const STATUS_COLORS: Record<string, string> = {
  OPT01_IDEA_BACKLOG: '#94a3b8', OPT02_APPROVED: ORANGE[600],
  OPT03_SCRIPTING: '#ec4899', OPT04_FILMING: '#a855f7',
  OPT05_ON_REVIEW: '#8b5cf6', OPT06_PUBLISHING_PREP: '#f59e0b',
  OPT07_READY_TO_PUBLISH: '#22c55e', OPT08_PUBLISHING: '#eab308',
  OPT09_PUBLISHED: '#16a34a', OPT10_ARCHIVED: '#ef4444',
};

const STATUS_LABELS: Record<string, string> = {
  OPT01_IDEA_BACKLOG: 'Idea', OPT02_APPROVED: 'Approved',
  OPT03_SCRIPTING: 'Scripting', OPT04_FILMING: 'Filming',
  OPT05_ON_REVIEW: 'Review', OPT06_PUBLISHING_PREP: 'Prep',
  OPT07_READY_TO_PUBLISH: 'Ready', OPT08_PUBLISHING: 'Publishing',
  OPT09_PUBLISHED: 'Published', OPT10_ARCHIVED: 'Archived',
};

const PLATFORM_LABELS: Record<string, string> = {
  LINKEDIN: 'LinkedIn', INSTAGRAM: 'Instagram', TIKTOK: 'TikTok',
  YOUTUBE: 'YouTube', REDDIT: 'Reddit', X: 'X',
  TELEGRAM: 'Telegram', THREADS: 'Threads', DS_CS: 'DS — CS',
  MEDIUM: 'Medium', SUBSTACK: 'Substack', LINKEDIN_ARTICLE: 'LinkedIn Article',
};

const PILLAR_COLORS = ['#3b82f6', '#a855f7', '#22c55e', ORANGE[600], '#ec4899'];
const PILLAR_LABELS: Record<string, string> = {
  PILLAR_1: 'Pillar 1', PILLAR_2: 'Pillar 2', PILLAR_3: 'Pillar 3',
  PILLAR_4: 'Pillar 4', PILLAR_5: 'Pillar 5',
};

const YEARS = [2026, 2025, 2024];

interface ContentItem {
  id: string;
  status: string | null;
  pillar: string | null;
  platform: string | null;
  publishAt: string | null;
}

const Card = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, background: '#fff', ...style }}>
    {children}
  </div>
);

const CardHeader = ({ title }: { title: string }) => (
  <div style={{ padding: '10px 16px', borderBottom: '1px solid #f1f5f9' }}>
    <span style={{ fontSize: 13, fontWeight: 600, color: '#0f172a' }}>{title}</span>
  </div>
);

const Tip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: '#0f172a', color: '#fff', padding: '6px 10px', borderRadius: 6, fontSize: 12 }}>
      {payload[0].name ?? payload[0].payload?.name}: {payload[0].value}
    </div>
  );
};

type HeatmapMode = 'scheduled' | 'published';

const ContributionHeatmap = ({ items, selectedYear, onYearChange, mode }: { items: ContentItem[]; selectedYear: number; onYearChange: (y: number) => void; mode: HeatmapMode }) => {
  const CELL = 11;
  const GAP = 2;
  const CELL_TOTAL = CELL + GAP;

  const dayData = useMemo(() => {
    const map: Record<string, number> = {};
    for (const item of items) {
      if (!item.publishAt) continue;
      const d = new Date(item.publishAt);
      if (d.getFullYear() !== selectedYear) continue;
      if (mode === 'published' && item.status !== 'OPT09_PUBLISHED') continue;
      if (mode === 'scheduled' && item.status === 'OPT09_PUBLISHED') continue;
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      map[key] = (map[key] ?? 0) + 1;
    }
    return map;
  }, [items, selectedYear, mode]);

  const startDate = useMemo(() => {
    const d = new Date(selectedYear, 0, 1);
    while (d.getDay() !== 1) d.setDate(d.getDate() - 1);
    return d;
  }, [selectedYear]);

  const endDate = useMemo(() => {
    const d = new Date(selectedYear, 11, 31);
    return d;
  }, [selectedYear]);

  const grid = useMemo(() => {
    const result: { date: Date; key: string; count: number }[][] = [];
    const cursor = new Date(startDate);
    while (cursor <= endDate || result.length < 1) {
      const week: { date: Date; key: string; count: number }[] = [];
      for (let d = 0; d < 7; d++) {
        const key = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, '0')}-${String(cursor.getDate()).padStart(2, '0')}`;
        week.push({ date: new Date(cursor), key, count: dayData[key] ?? 0 });
        cursor.setDate(cursor.getDate() + 1);
      }
      result.push(week);
      if (cursor > endDate && cursor.getDay() === 1) break;
    }
    return result;
  }, [dayData, startDate, endDate]);

  const getColor = (count: number) => {
    if (count === 0) return '#f1f5f9';
    if (count === 1) return ORANGE[200];
    if (count === 2) return ORANGE[400];
    if (count <= 4) return ORANGE[600];
    return ORANGE[800];
  };

  const monthLabels = useMemo(() => {
    const labels: { week: number; label: string; left: number }[] = [];
    let lastMonth = -1;
    for (let w = 0; w < grid.length; w++) {
      const month = grid[w][0].date.getMonth();
      if (month !== lastMonth && grid[w][0].date.getFullYear() === selectedYear) {
        labels.push({ week: w, label: grid[w][0].date.toLocaleString('default', { month: 'short' }), left: w * CELL_TOTAL });
        lastMonth = month;
      }
    }
    return labels;
  }, [grid, selectedYear]);

  const dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

  return (
    <div style={{ display: 'flex', flex: 1, minWidth: 0 }}>
      <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
        <div style={{ padding: '12px 16px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ position: 'relative', height: 14, marginBottom: 4, marginLeft: 32 }}>
            {monthLabels.map((m) => (
              <span key={m.week} style={{ position: 'absolute', left: m.left, fontSize: 11, color: '#64748b', whiteSpace: 'nowrap' }}>{m.label}</span>
            ))}
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: GAP, marginRight: 4, width: 28, flexShrink: 0 }}>
              {dayLabels.map((d, i) => (
                <div key={i} style={{ height: CELL, fontSize: 10, color: '#94a3b8', lineHeight: `${CELL}px`, textAlign: 'right' }}>{d}</div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: GAP }}>
              {grid.map((week, wi) => (
                <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: GAP }}>
                  {week.map((day, di) => (
                    <div
                      key={di}
                      title={`${day.date.toLocaleDateString()}: ${day.count} ${mode === 'scheduled' ? 'scheduled' : 'published'}`}
                      style={{ width: CELL, height: CELL, borderRadius: 2, background: getColor(day.count) }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 8, justifyContent: 'flex-end' }}>
            <span style={{ fontSize: 10, color: '#94a3b8' }}>Less</span>
            {[0, 1, 2, 3, 5].map((c, i) => (
              <div key={i} style={{ width: 11, height: 11, borderRadius: 2, background: getColor(c) }} />
            ))}
            <span style={{ fontSize: 10, color: '#94a3b8' }}>More</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '1px solid #f1f5f9', padding: '8px 0' }}>
        {YEARS.map((y) => (
          <button
            key={y}
            onClick={() => onYearChange(y)}
            style={{
              display: 'block',
              width: 48,
              padding: '8px 0',
              border: 'none',
              background: y === selectedYear ? ORANGE[600] : 'transparent',
              color: y === selectedYear ? '#fff' : '#64748b',
              fontSize: 12,
              fontWeight: y === selectedYear ? 700 : 500,
              cursor: 'pointer',
              borderRadius: y === selectedYear ? '4px' : 0,
              margin: '0 4px',
              textAlign: 'center',
            }}
          >
            {y}
          </button>
        ))}
      </div>
    </div>
  );
};

const PlatformOverview = ({ items }: { items: ContentItem[] }) => {
  const data = useMemo(() => {
    const map: Record<string, { published: number; queued: number }> = {};
    for (const item of items) {
      const p = item.platform ?? 'Unassigned';
      if (!map[p]) map[p] = { published: 0, queued: 0 };
      if (item.status === 'OPT09_PUBLISHED') map[p].published++;
      else if (['OPT07_READY_TO_PUBLISH', 'OPT08_PUBLISHING'].includes(item.status ?? '')) map[p].queued++;
    }
    return Object.entries(map)
      .map(([platform, d]) => ({ platform, ...d, total: d.published + d.queued }))
      .sort((a, b) => b.total - a.total);
  }, [items]);

  return (
    <Card style={{ width: 320, flexShrink: 0 }}>
      <CardHeader title="Platform Overview" />
      <div style={{ padding: '4px 0' }}>
        {data.length === 0 && <div style={{ padding: 16, fontSize: 13, color: '#94a3b8' }}>No data</div>}
        {data.map((p) => (
          <div key={p.platform} style={{ display: 'flex', alignItems: 'center', padding: '6px 16px', gap: 12 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: PLATFORM_COLORS[p.platform] ?? ORANGE[600], flexShrink: 0 }} />
            <span style={{ flex: 1, fontSize: 13, color: '#334155' }}>{PLATFORM_LABELS[p.platform] ?? p.platform}</span>
            <div style={{ display: 'flex', gap: 8, fontSize: 12 }}>
              <span style={{ color: '#16a34a', fontWeight: 600 }}>{p.published} published</span>
              {p.queued > 0 && <span style={{ color: '#f59e0b', fontWeight: 600 }}>{p.queued} queued</span>}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

const ContentDashboard = () => {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [heatmapMode, setHeatmapMode] = useState<HeatmapMode>('scheduled');

  useEffect(() => {
    const fetch = async () => {
      const client = new CoreApiClient();
      const res = await client.query({
        contents: {
          edges: {
            node: { id: true, status: true, pillar: true, platform: true, publishAt: true },
          },
        },
      });
      setItems(res.contents.edges.map((e: any) => e.node));
    };
    fetch();
  }, []);

  const stats = useMemo(() => {
    let published = 0;
    let queued = 0;
    let drafts = 0;
    let todayPublished = 0;
    let todayQueue = 0;
    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    for (const item of items) {
      const s = item.status ?? '';
      if (s === 'OPT09_PUBLISHED') {
        published++;
        if (item.publishAt) {
          const d = new Date(item.publishAt);
          const dStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
          if (dStr === todayStr) todayPublished++;
        }
      }
      if (['OPT07_READY_TO_PUBLISH', 'OPT08_PUBLISHING'].includes(s)) {
        queued++;
        if (item.publishAt) {
          const d = new Date(item.publishAt);
          const dStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
          if (dStr === todayStr) todayQueue++;
        }
      }
      if (['OPT01_IDEA_BACKLOG', 'OPT02_APPROVED', 'OPT03_SCRIPTING', 'OPT04_FILMING', 'OPT05_ON_REVIEW', 'OPT06_PUBLISHING_PREP'].includes(s)) drafts++;
    }
    return { total: items.length, published, queued, drafts, todayPublished, todayQueue };
  }, [items]);

  const pillarData = useMemo(() => {
    const map: Record<string, number> = {};
    for (const item of items) {
      const p = item.pillar ?? 'Unassigned';
      map[p] = (map[p] ?? 0) + 1;
    }
    return Object.entries(map).map(([name, value]) => ({ name: PILLAR_LABELS[name] ?? name, value }));
  }, [items]);

  const statusData = useMemo(() => {
    const map: Record<string, number> = {};
    for (const item of items) {
      const s = item.status ?? 'Unknown';
      map[s] = (map[s] ?? 0) + 1;
    }
    return Object.entries(map).map(([name, value]) => ({ name: STATUS_LABELS[name] ?? name, value, fill: STATUS_COLORS[name] ?? '#94a3b8' }));
  }, [items]);

  const platformBarData = useMemo(() => {
    const map: Record<string, number> = {};
    for (const item of items) {
      if (item.status !== 'OPT09_PUBLISHED') continue;
      const p = item.platform ?? 'Unassigned';
      map[p] = (map[p] ?? 0) + 1;
    }
    return Object.entries(map)
      .map(([name, value]) => ({ name: PLATFORM_LABELS[name] ?? name, value, fill: PLATFORM_COLORS[name] ?? ORANGE[600] }))
      .sort((a, b) => b.value - a.value);
  }, [items]);

  return (
    <div style={{ padding: 16, width: '100%', boxSizing: 'border-box' }}>
      <h1 style={{ fontSize: 22, fontWeight: 600, marginBottom: 16, color: '#0f172a' }}>Content Dashboard</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, marginBottom: 16 }}>
        {[
          { label: 'Total', value: stats.total },
          { label: 'Published', value: stats.published },
          { label: 'Drafts', value: stats.drafts },
          { label: 'In Queue', value: stats.queued },
          { label: 'Published Today', value: stats.todayPublished },
          { label: 'Queued Today', value: stats.todayQueue },
        ].map((m) => (
          <div key={m.label} style={{ padding: 12, borderRadius: 8, border: '1px solid #e2e8f0', background: '#fff' }}>
            <div style={{ fontSize: 11, color: '#64748b', marginBottom: 2, fontWeight: 500 }}>{m.label}</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: '#0f172a' }}>{m.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 16, marginBottom: 16, alignItems: 'stretch' }}>
        <Card style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px', borderBottom: '1px solid #f1f5f9' }}>
            {([
              { key: 'scheduled' as HeatmapMode, label: 'Scheduled to Publish' },
              { key: 'published' as HeatmapMode, label: 'Publishing Activity' },
            ]).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setHeatmapMode(tab.key)}
                style={{
                  padding: '10px 16px',
                  border: 'none',
                  borderBottom: heatmapMode === tab.key ? `2px solid ${ORANGE[600]}` : '2px solid transparent',
                  background: 'transparent',
                  color: heatmapMode === tab.key ? ORANGE[600] : '#64748b',
                  fontSize: 13,
                  fontWeight: heatmapMode === tab.key ? 600 : 500,
                  cursor: 'pointer',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', flex: 1 }}>
            <ContributionHeatmap items={items} selectedYear={selectedYear} onYearChange={setSelectedYear} mode={heatmapMode} />
          </div>
        </Card>
        <PlatformOverview items={items} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <Card>
          <CardHeader title="Content by Pillar" />
          <div style={{ padding: 12, display: 'flex', justifyContent: 'center' }}>
            {pillarData.length === 0 ? (
              <div style={{ height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: 13 }}>No data</div>
            ) : (
              <PieChart width={360} height={240}>
                <Pie data={pillarData} cx="50%" cy="45%" innerRadius={45} outerRadius={80} paddingAngle={3} dataKey="value" stroke="none">
                  {pillarData.map((_, i) => (
                    <Cell key={i} fill={PILLAR_COLORS[i % PILLAR_COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip content={<Tip />} />
                <Legend verticalAlign="bottom" height={28} formatter={(v: string) => <span style={{ fontSize: 11, color: '#334155' }}>{v}</span>} />
              </PieChart>
            )}
          </div>
        </Card>

        <Card>
          <CardHeader title="Content by Status" />
          <div style={{ padding: 12, display: 'flex', justifyContent: 'center' }}>
            {statusData.length === 0 ? (
              <div style={{ height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: 13 }}>No data</div>
            ) : (
              <RadialBarChart width={360} height={240} cx="50%" cy="45%" innerRadius="20%" outerRadius="85%" barSize={12} data={statusData}>
                <RadialBar background={{ fill: '#f1f5f9' }} dataKey="value" cornerRadius={4} />
                <RechartsTooltip content={<Tip />} />
                <Legend verticalAlign="bottom" height={28} formatter={(v: string) => <span style={{ fontSize: 11, color: '#334155' }}>{v}</span>} />
              </RadialBarChart>
            )}
          </div>
        </Card>

        <Card style={{ gridColumn: '1 / -1' }}>
          <CardHeader title="Published Content by Platform" />
          <div style={{ padding: 12, display: 'flex', justifyContent: 'center' }}>
            {platformBarData.length === 0 ? (
              <div style={{ height: 240, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: 13 }}>No data</div>
            ) : (
              <BarChart width={740} height={240} data={platformBarData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#64748b' }} />
                <YAxis tick={{ fontSize: 11, fill: '#64748b' }} allowDecimals={false} />
                <RechartsTooltip content={<Tip />} />
                <Bar dataKey="value" name="Published" radius={[4, 4, 0, 0]}>
                  {platformBarData.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default defineFrontComponent({
  universalIdentifier: MAIN_PAGE_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
  name: APP_DISPLAY_NAME,
  description: APP_DISPLAY_NAME,
  component: ContentDashboard,
});
