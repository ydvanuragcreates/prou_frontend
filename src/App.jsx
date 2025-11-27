import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';
import LoadingSpinner from './components/LoadingSpinner';
import { mockTasks } from './mockData';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [activeView, setActiveView] = useState('dashboard');
  const [statusFilter, setStatusFilter] = useState('All');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching with 1 second delay
  useEffect(() => {
    setTimeout(() => {
      setTasks(mockTasks);
      setFilteredTasks(mockTasks);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filter tasks when status filter changes
  useEffect(() => {
    if (statusFilter === 'All') {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter(task => task.status === statusFilter));
    }
  }, [statusFilter, tasks]);

  const handleCreateTask = (formData) => {
    const newTask = {
      id: tasks.length + 1,
      ...formData
    };
    setTasks([newTask, ...tasks]);
    setIsFormOpen(false);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      
      <main className="flex-1 lg:ml-0">
        {activeView === 'dashboard' && (
          <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Project Tasks</h1>
              <p className="text-slate-600">Manage and track your project tasks</p>
            </div>

            {/* Filter buttons and Create button */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                {['All', 'Pending', 'In Progress', 'Completed'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      statusFilter === status
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                + Create Task
              </button>
            </div>

            {/* Task Grid */}
            {filteredTasks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-500 text-lg">No tasks found for this filter.</p>
              </div>
            )}
          </div>
        )}

        {activeView === 'team' && (
          <div className="p-6 lg:p-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Team</h1>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
              <p className="text-slate-600">Team management features coming soon...</p>
            </div>
          </div>
        )}

        {activeView === 'settings' && (
          <div className="p-6 lg:p-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Settings</h1>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
              <p className="text-slate-600">Settings panel coming soon...</p>
            </div>
          </div>
        )}
      </main>

      <TaskForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleCreateTask}
      />
    </div>
  );
}

export default App;
