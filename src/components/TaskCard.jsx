const TaskCard = ({ task }) => {
  const priorityColors = {
    High: 'bg-red-100 text-red-800 border-red-200',
    Medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    Low: 'bg-green-100 text-green-800 border-green-200'
  };

  const statusColors = {
    'In Progress': 'bg-blue-100 text-blue-800',
    'Pending': 'bg-gray-100 text-gray-800',
    'Completed': 'bg-green-100 text-green-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-slate-900">{task.title}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-slate-600">
          <span className="font-medium">Category:</span> {task.category}
        </p>
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[task.status]}`}>
          {task.status}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
