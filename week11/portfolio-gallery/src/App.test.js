import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import projects from './data/projects';

const cards = () => screen.getAllByRole('article');

test('shows every project by default', () => {
  render(<App />);
  expect(cards()).toHaveLength(projects.length);
  expect(screen.getByRole('button', { name: /^All/ })).toHaveAttribute('aria-pressed', 'true');
});

test('the filter bar shows only the projects that use a technology', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', { name: /^React/ }));

  const reactProjects = projects.filter((p) => p.tech.includes('React'));
  expect(cards()).toHaveLength(reactProjects.length);
  for (const card of cards()) {
    expect(within(card).getByText('React')).toBeInTheDocument();
  }
  expect(screen.getByRole('button', { name: /^React/ })).toHaveAttribute('aria-pressed', 'true');

  userEvent.click(screen.getByRole('button', { name: /^All/ }));
  expect(cards()).toHaveLength(projects.length);
});

test('a card without a demo says so instead of showing a broken link', () => {
  render(<App />);
  const card = screen.getByRole('heading', { name: 'git-exercise' }).closest('article');
  expect(within(card).getByText('No live demo')).toBeInTheDocument();
  expect(within(card).getAllByRole('link')).toHaveLength(1);
});
