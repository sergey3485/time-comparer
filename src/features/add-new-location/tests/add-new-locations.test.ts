import { allSettled, fork } from 'effector';
import { describe, expect, it } from 'vitest';
import worldCities from 'worldcities';

import { $locations, $selectedLocation } from '@/entities/location';

import {
  $inputValue, $locationVariants, addLocation, changeInputValue,
} from '../add-new-location.model';

const prague = worldCities.getByName('prague');

describe('Поиск городов', () => {
  it('Должен заполняться инпут', async () => {
    const scope = fork();

    await allSettled(changeInputValue, { scope, params: 'Prague' });

    expect(scope.getState($inputValue)).toBe('Prague');
  });

  it('Должен находить список городов по части названия', async () => {
    const scope = fork();

    await allSettled(changeInputValue, { scope, params: 'Prague' });

    expect(scope.getState($inputValue)).toBe('Prague');
    expect(scope.getState($locationVariants).length).not.toBe(0);
  });

  it('Должен не начинать поиск если инпут имеет меньше трех символов', async () => {
    const scope = fork();

    await allSettled(changeInputValue, { scope, params: 'Lo' });

    expect(scope.getState($inputValue)).toBe('Lo');
    expect(scope.getState($locationVariants).length).toBe(0);
  });
});

describe('Добавление новой локации', () => {
  it('Должен добавить локацию в список, если такой еще нет', async () => {
    const scope = fork({
      values: [[$locations, []]],
    });

    await allSettled(addLocation, { scope, params: prague });
    await allSettled(addLocation, { scope, params: prague });

    expect(scope.getState($locations)).toStrictEqual([prague]);
  });

  it('Должен при добавлении новой локации обнулять список вариантов локаций и значение инпута', async () => {
    const scope = fork({
      values: [[$locationVariants, [prague]]],
    });

    await allSettled(addLocation, { scope, params: prague });

    expect(scope.getState($inputValue)).toBe('');
    expect(scope.getState($locationVariants)).toStrictEqual([]);
  });

  it('Должен, если список локаций пустой, ставить выбранной локацией, только что добавленную', async () => {
    const scope = fork({
      values: [[$selectedLocation, null]],
    });

    await allSettled(addLocation, { scope, params: prague });

    expect(scope.getState($selectedLocation)).toStrictEqual(prague);
  });
});
