export const TEST_CASE_TYPES = {
  WEB: 'web',
  MOBILE: 'mobile'
};

export const getTestCaseSheet = async (type) => {
  const sheetId = '1VrsI8Ys4hh8trt04C9ZCj_7NCWADknZsru8lX4eXKw0';
  return `https://docs.google.com/spreadsheets/d/${sheetId}/preview`;
}; 