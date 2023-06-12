'use strict';

module.exports = [
    {
    action: 'run-excel-range',
    descr: 'Подготовка',
    excel: 'link_on_excel',
    range: 'Prep!B1:B5',
    context: {
      login: 'test/admin',
      password: 'ZZZ',
      host: 'TEST_STAGE',
      subhost: 'terminal'
    }
  },
  {
    action: 'run-excel-range',
    descr: 'Tест-4-1 ФОРМИРОВАНИЕ ОТЧЕТОВ',
    excel: 'link_on_excel',
    range: 'TEST!A755:C766',
    context: {
      login: 'test/admin',
      password: 'ZZZ',
      host: 'TEST_STAGE',
      subhost: 'terminal'
    }
  },
  {
    action: 'run-excel-range',
    descr: 'Tест-4-2 ФОРМИРОВАНИЕ ОТЧЕТОВ',
    excel: 'link_on_excel',
    range: 'TEST!A755:C766',
    context: {
      login: 'test/admin',
      password: 'ZZZ',
      host: 'TEST_STAGE',
      subhost: 'terminal'
    }
  }
];
