import { describe, it, expect } from 'vitest';

import { fork, allSettled } from 'effector';

import {
  $locationVariants,
  $inputValue,
  changeInputValue,
  $locations,
  addLocation,
  prague,
  moscow,
  toki,
  deleteCity,
  $selectedLocation,
} from './locations.model';

describe('locations model', () => {
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
        values: [
          [$locations, []],
        ],
      });

      await allSettled(addLocation, { scope, params: prague });
      await allSettled(addLocation, { scope, params: prague });

      expect(scope.getState($locations)).toStrictEqual([prague]);
    });

    it('Должен при добавлении новой локации обнулять список вариантов локаций и значение инпута', async () => {
      const scope = fork({
        values: [
          [$locationVariants, [prague]],
        ],
      });

      await allSettled(addLocation, { scope, params: prague });

      expect(scope.getState($inputValue)).toBe('');
      expect(scope.getState($locationVariants)).toStrictEqual([]);
    });

    it('Должен, если список локаций пустой, ставить выбранной локацией, только что добавленную', async () => {
      const scope = fork({
        values: [
          [$selectedLocation, null],
        ],
      });

      await allSettled(addLocation, { scope, params: prague });

      expect(scope.getState($selectedLocation)).toStrictEqual(prague);
    });
  });

  describe('Удаление локации', () => {
    it('Должен удалить город из списка городов', async () => {
      const scope = fork({
        values: [
          [$locations, [prague]],
        ],
      });

      await allSettled(deleteCity, { scope, params: prague });

      expect(scope.getState($locations)).toStrictEqual([]);
    });

    it('Должен при удалении города ставить выбранным первый город из списка', async () => {
      const scope = fork({
        values: [
          [$locations, [prague, moscow, toki]],
        ],
      });

      await allSettled(deleteCity, { scope, params: prague });

      expect(scope.getState($selectedLocation)).toBe(moscow);

      await allSettled(deleteCity, { scope, params: moscow });

      expect(scope.getState($selectedLocation)).toBe(toki);
    });
  });
});
