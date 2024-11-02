function container(props) {
  return <div className={`max-w-screen-lg m-auto ${props.className}`}>{props.children}</div>;
}

export default container;