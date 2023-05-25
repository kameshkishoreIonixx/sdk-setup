window.open = jest.fn();
jest.mock('@mui/icons-material', () => {
  return {
    KeyboardArrowUp: jest.fn(),
    KeyboardArrowDown: jest.fn(),
    Error: jest.fn(),
  };
});
