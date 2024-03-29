let nextIdeaId = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')).ideas.length : 0
console.log('nextIdeaId')
export const addIdea = (title, text, date) => ({
  type: 'ADD_IDEA',
  id: nextIdeaId++,
  title,
  text,
  date,
})

export const editIdea = (title, text, date, id) => ({
  type: 'EDIT_IDEA',
  id,
  title,
  text,
  date,
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleIdea = id => ({
  type: 'TOGGLE_IDEA',
  id
})

export const VisibilityFilters = {
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}