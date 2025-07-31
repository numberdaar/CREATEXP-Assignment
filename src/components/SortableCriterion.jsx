import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableCriterion = ({ 
  criterion, 
  isActive, 
  onRemove, 
  onDirectionChange, 
  getDirectionText,
  showDragHandle = false 
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: criterion.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="grid grid-cols-12 items-center p-3 mb-2 rounded-md"
    >
      <div className="col-span-4 flex items-center space-x-3">
        {showDragHandle && (
          <div
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing p-1"
          >
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 6h8v2H8V6zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/>
            </svg>
          </div>
        )}
        
        <span className="text-lg">{criterion.icon}</span>
        <span className="text-sm text-gray-700">{criterion.label}</span>
      </div>

      <div className="col-span-6 flex items-center space-x-2">
        <button
          onClick={() => onDirectionChange('asc')}
          className={`px-3 py-1 text-xs rounded ${
            criterion.direction === 'asc'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {getDirectionText(criterion.field, 'asc')}
        </button>
        
        <button
          onClick={() => onDirectionChange('desc')}
          className={`px-3 py-1 text-xs rounded ${
            criterion.direction === 'desc'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {getDirectionText(criterion.field, 'desc')}
        </button>
      </div>

      <div className="col-span-2 flex justify-end">
        {isActive && (
          <button
            onClick={onRemove}
            className="p-1 text-gray-400 hover:text-red-500"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SortableCriterion; 