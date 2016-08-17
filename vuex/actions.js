export const addNote = ({ dispatch }) => {
  dispatch('ADD_NOTE')
}

export const editNote = ({ dispatch }, text) => {
	// console.log(text);
  dispatch('EDIT_NOTE', text)
}

export const deleteNote = ({ dispatch }) => {
  dispatch('DELETE_NOTE')
}

export const updateActiveNote = ({ dispatch }, note) => {
  dispatch('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = ({ dispatch }) => {
  dispatch('TOGGLE_FAVORITE')
}
