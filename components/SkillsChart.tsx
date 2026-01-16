
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { PORTFOLIO_DATA } from '../constants';

const SkillsChart: React.FC = () => {
  const data = PORTFOLIO_DATA.skills
    .filter(s => s.category !== 'Soft Skills')
    .slice(0, 8);

  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#ef4444', '#06b6d4', '#84cc16'];

  return (
    <div className="h-[400px] w-full bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
      <h3 className="text-xl font-semibold mb-6 text-center">Technical Proficiency</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 40, right: 40 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" horizontal={false} />
          <XAxis type="number" hide domain={[0, 100]} />
          <YAxis 
            dataKey="name" 
            type="category" 
            stroke="#9ca3af" 
            fontSize={12}
            width={100}
          />
          <Tooltip 
            cursor={{ fill: 'rgba(55, 65, 81, 0.4)' }}
            contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px' }}
            itemStyle={{ color: '#f9fafb' }}
          />
          <Bar 
            dataKey="level" 
            radius={[0, 4, 4, 0]} 
            barSize={20}
            isAnimationActive={true}
            animationDuration={1800}
            animationEasing="ease-out"
            animationBegin={300}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsChart;
