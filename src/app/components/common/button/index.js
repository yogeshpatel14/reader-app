import Icon from "@ant-design/icons";

const CustomButton = (props) => {
  const { title, customstyle, isIcon, iconName } = props;

  const renderIcon = () => {
    if (isIcon) {
      return <Icon component={iconName} className="btn-icon" />;
    }
  };

  return (
    <button className={`custom-btn ${customstyle}`} {...props}>
      {renderIcon()}
      {title}
    </button>
  );
};

export { CustomButton };
