import React, { useState } from 'react';
import { Workflow, Bot, BarChart3, Search, TrendingUp, Zap, Brain, Activity, ArrowUpRight, Clock } from 'lucide-react';

export default function ITConceptPlatform() {
  const [activeTab, setActiveTab] = useState('dashboards');
  const [searchQuery, setSearchQuery] = useState('');

  const flows = [
    { id: 1, name: 'Client Onboarding Flow', status: 'active', runs: 1250, success: 98, trend: '+12%' },
    { id: 2, name: 'Invoice Processing', status: 'active', runs: 845, success: 95, trend: '+8%' },
    { id: 3, name: 'Support Ticket Routing', status: 'paused', runs: 2100, success: 92, trend: '-3%' },
  ];

  const agents = [
    { id: 1, name: 'Support Assistant', type: 'Customer Service', status: 'online', interactions: 3420, efficiency: 94 },
    { id: 2, name: 'Data Analyzer', type: 'Analytics', status: 'online', interactions: 1560, efficiency: 89 },
    { id: 3, name: 'Code Reviewer', type: 'Development', status: 'offline', interactions: 890, efficiency: 96 },
  ];

  const dashboards = [
    { id: 1, name: 'Sales Performance', views: 456, updated: '2h ago', category: 'Business', color: 'from-blue-500 to-cyan-500' },
    { id: 2, name: 'Infrastructure Metrics', views: 789, updated: '5h ago', category: 'IT Operations', color: 'from-purple-500 to-pink-500' },
    { id: 3, name: 'Customer Analytics', views: 321, updated: '1d ago', category: 'Marketing', color: 'from-orange-500 to-red-500' },
    { id: 4, name: 'Financial Overview', views: 612, updated: '3h ago', category: 'Finance', color: 'from-green-500 to-emerald-500' },
    { id: 5, name: 'Security Dashboard', views: 234, updated: '6h ago', category: 'Security', color: 'from-red-500 to-rose-500' },
    { id: 6, name: 'Team Productivity', views: 445, updated: '4h ago', category: 'HR', color: 'from-indigo-500 to-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30">
                  <span className="text-white font-bold text-xl">IT</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">IT-CONCEPT</h1>
                <p className="text-xs text-gray-500 font-medium">Intelligence Platform</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-red-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Rechercher dans la plateforme..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-6 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 w-80 bg-gray-50/50 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Navigation Tabs */}
        <div className="flex space-x-3 mb-10 bg-white/60 backdrop-blur-xl p-2 rounded-2xl shadow-sm border border-gray-200/50">
          {[
            { id: 'dashboards', label: 'Dashboards', icon: BarChart3 },
            { id: 'flows', label: 'Flows', icon: Workflow },
            { id: 'agents', label: 'AI Agents', icon: Bot },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 scale-105'
                  : 'text-gray-600 hover:bg-white hover:shadow-sm'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dashboards Tab */}
        {activeTab === 'dashboards' && (
          <div className="space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <Workflow className="w-12 h-12 mb-4 opacity-90" />
                  <div className="text-4xl font-bold mb-2">{flows.length}</div>
                  <div className="text-blue-100 font-medium">Active Flows</div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <Brain className="w-12 h-12 mb-4 opacity-90" />
                  <div className="text-4xl font-bold mb-2">{agents.length}</div>
                  <div className="text-purple-100 font-medium">AI Agents</div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <TrendingUp className="w-12 h-12 mb-4 opacity-90" />
                  <div className="text-4xl font-bold mb-2">{dashboards.length}</div>
                  <div className="text-emerald-100 font-medium">Dashboards</div>
                </div>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dashboards.map((dashboard) => (
                <div key={dashboard.id} className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer overflow-hidden hover:-translate-y-1">
                  <div className={`absolute inset-0 bg-gradient-to-br ${dashboard.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${dashboard.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <BarChart3 className="w-7 h-7 text-white" />
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{dashboard.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{dashboard.category}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs">{dashboard.updated}</span>
                      </div>
                      <div className="text-sm font-semibold text-gray-700">{dashboard.views} vues</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Flows Tab */}
        {activeTab === 'flows' && (
          <div className="space-y-5">
            {flows.map((flow) => (
              <div key={flow.id} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-5">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{flow.name}</h3>
                      <p className="text-sm text-gray-500 font-medium">{flow.runs.toLocaleString()} exécutions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">{flow.success}%</p>
                      <p className="text-xs text-gray-500 font-medium mt-1">Taux de succès</p>
                    </div>
                    <div className="text-center">
                      <p className={`text-2xl font-bold ${flow.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{flow.trend}</p>
                      <p className="text-xs text-gray-500 font-medium mt-1">Tendance</p>
                    </div>
                    <span className={`px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm ${
                      flow.status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {flow.status === 'active' ? 'Actif' : 'Pause'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Agents Tab */}
        {activeTab === 'agents' && (
          <div className="space-y-5">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-5">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">{agent.name}</h3>
                      <p className="text-sm text-gray-500 font-medium">{agent.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-purple-600">{agent.interactions.toLocaleString()}</p>
                      <p className="text-xs text-gray-500 font-medium mt-1">Interactions</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-indigo-600">{agent.efficiency}%</p>
                      <p className="text-xs text-gray-500 font-medium mt-1">Efficacité</p>
                    </div>
                    <span className={`px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center space-x-2 shadow-sm ${
                      agent.status === 'online' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      <span className={`w-2.5 h-2.5 rounded-full ${agent.status === 'online' ? 'bg-green-500' : 'bg-gray-500'} animate-pulse`}></span>
                      <span>{agent.status === 'online' ? 'En ligne' : 'Hors ligne'}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
