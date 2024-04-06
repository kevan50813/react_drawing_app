import React from 'react';
import { queryAllByTestId, render, screen } from '@testing-library/react';
import App from './App';

test('app main div renders', () => {
  const { queryByTestId } = render(
    <div  data-testid="pageBackgound" id ="pageBackgound"></div>
  );
  expect(queryByTestId(/pageBackgound/i)).toBeTruthy();

});

test('canvas div renders', () => {
  const { queryByTestId } = render(
    <canvas data-testid="canvasBackgound" id ="canvasBackgound"></canvas>
  );
  expect(queryByTestId(/canvasBackgound/i)).toBeTruthy();

});

test('controol pannel div renders', () => {
  const { queryByTestId } = render(
    <div data-testid="controlpanel" className="controlpanel"></div>
  );
  expect(queryByTestId(/controlpanel/i)).toBeTruthy();

});


