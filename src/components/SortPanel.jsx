import React from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SortableCriterion from './SortableCriterion';
import { availableSortFields } from '../data/mockData.jsx';

const SortPanel = ({ sortCriteria, onSortCriteriaChange, onApplySort, onClearAll }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = sortCriteria.findIndex(criterion => criterion.id === active.id);
      const newIndex = sortCriteria.findIndex(criterion => criterion.id === over.id);
      
      const newSortCriteria = arrayMove(sortCriteria, oldIndex, newIndex);
      onSortCriteriaChange(newSortCriteria);
    }
  };

  const handleAddCriterion = (field) => {
    const newCriterion = {
      id: field.id,
      field: field.field,
      direction: 'asc',
      label: field.label,
      icon: field.icon
    };
    
    const newSortCriteria = [...sortCriteria, newCriterion];
    onSortCriteriaChange(newSortCriteria);
  };

  const handleRemoveCriterion = (criterionId) => {
    const newSortCriteria = sortCriteria.filter(c => c.id !== criterionId);
    onSortCriteriaChange(newSortCriteria);
  };

  const handleDirectionChange = (criterionId, newDirection) => {
    const newSortCriteria = sortCriteria.map(criterion =>
      criterion.id === criterionId
        ? { ...criterion, direction: newDirection }
        : criterion
    );
    onSortCriteriaChange(newSortCriteria);
  };

  const getDirectionText = (field, direction) => {
    if (field === 'clientName' || field === 'id') {
      return direction === 'asc' ? '↑ A-Z' : '↓ Z-A';
    }
    return direction === 'asc' ? '↑ Newest to Oldest' : '↓ Oldest to Newest';
  };

  // Get all fields that are not currently active
  const inactiveFields = availableSortFields.filter(field => 
    !sortCriteria.find(criterion => criterion.id === field.id)
  );

  return (
    <div className="absolute right-0 top-0  w-[700px] bg-white border border-gray-200 rounded-lg shadow-lg z-10 main_div_sortpanel">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Sort By</h3>
        
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={sortCriteria.map(c => c.id)}
            strategy={verticalListSortingStrategy}
          >
            {sortCriteria.map((criterion, index) => (
              <SortableCriterion
                key={criterion.id}
                criterion={criterion}
                isActive={true}
                onRemove={() => handleRemoveCriterion(criterion.id)}
                onDirectionChange={(direction) => handleDirectionChange(criterion.id, direction)}
                getDirectionText={getDirectionText}
                showDragHandle={true}
              />
            ))}
          </SortableContext>
        </DndContext>

        {/* Inactive fields */}
        {inactiveFields.map((field) => (
          <div
            key={field.id}
            className="grid grid-cols-12 items-center p-3 mb-2 cursor-pointer hover:bg-gray-50 rounded-md"
            onClick={() => handleAddCriterion(field)}
          >
            <div className="col-span-4 flex items-center space-x-2">
              <span className="text-lg">{field.icon}</span>
              <span className="text-sm text-gray-700">{field.label}</span>
            </div>
            <div className="col-span-6 flex items-center space-x-2">
              <button className="px-3 py-1 text-xs rounded bg-gray-100 text-gray-600 hover:bg-gray-200">
                {getDirectionText(field.field, 'asc')}
              </button>
              <button className="px-3 py-1 text-xs rounded bg-gray-100 text-gray-600 hover:bg-gray-200">
                {getDirectionText(field.field, 'desc')}
              </button>
            </div>
            <div className="col-span-2">
              {/* Empty space for inactive fields */}
            </div>
          </div>
        ))}

        {/* Action buttons */}
        <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-200">
          <button
            onClick={onClearAll}
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Clear all
          </button>
          <button
            onClick={onApplySort}
            className="bg-black text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800"
          >
            Apply Sort
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortPanel; 