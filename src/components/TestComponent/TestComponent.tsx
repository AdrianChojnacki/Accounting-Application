const TestComponent = ({ text }: { text: string }) => {
  return <p data-testid="test-component">{text}</p>;
};

export { TestComponent };
