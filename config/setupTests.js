const enzyme = require("enzyme");
const React = require("react");
const { once } = require("lodash");
const Adapter = require("enzyme-adapter-react-16");
// const { formatDate } = require("../src/i18n/formatters");

enzyme.configure({ adapter: new Adapter() });

// It needs to remove mounts in testing before implementation
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: (f) => once(f)(),
  useCallback: (f) => f,
  useMemo: (f) => once(f)(),
}));

global.HookWrapper = function (props) {
  const hook = props.hook ? props.hook() : undefined;
  return <div hook={hook} />;
};

global.mockUseStyles = function (useStylesFn, classesArray) {
  useStylesFn.mockReturnValue(
    classesArray.reduce((classes, className) => {
      classes[className] = className;
      return classes;
    }, {})
  );
};

global.mockFormatMessage = function (formatMessageFn) {
  formatMessageFn.mockImplementation((param) => param.id);
};

global.mockFormatDate = function (formatDateFn) {
  formatDateFn.mockImplementation(formatDate);
};
