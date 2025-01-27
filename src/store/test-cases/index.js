import { TEST_CASE_TYPES } from '@/services/test-cases/api';

export const state = {
  currentType: null,
  sheetUrl: null,
  loading: false,
  error: null
};

export const mutations = {
  SET_CURRENT_TYPE(state, type) {
    state.currentType = type;
  },
  SET_SHEET_URL(state, url) {
    state.sheetUrl = url;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  }
};

export const actions = {
  async loadTestCaseSheet({ commit }, type) {
    commit('SET_LOADING', true);
    try {
      const url = await getTestCaseSheet(type);
      commit('SET_SHEET_URL', url);
      commit('SET_CURRENT_TYPE', type);
    } catch (error) {
      commit('SET_ERROR', error.message);
    } finally {
      commit('SET_LOADING', false);
    }
  }
}; 