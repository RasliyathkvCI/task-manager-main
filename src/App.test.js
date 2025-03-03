import { render, screen } from '@testing-library/react';
import App from './App';
import { addTask } from './components/Tasklist';

test('renders Tasklist component', () => {
    render(<App />);
    const linkElement = screen.getByText(/Tasklist/i);
    expect(linkElement).toBeInTheDocument();
});
