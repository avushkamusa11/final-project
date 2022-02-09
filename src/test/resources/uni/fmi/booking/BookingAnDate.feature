Feature: Запазване на час при зъболекар от гост-потребител

  Scenario Outline: Запазване на час при зъболекар от гост-потребител
    Given Гост-потребителя отваря екрана за запазване на час
    When Въведе име "<name>"
    And Въведе адрес за електронна поща "<email>"
    And Избере час  <freeHour>
    And Натисне бутона за резервиране час
    Then Вижда съобщение: "<message>"

    Examples: 
      | name             |  email        |   freeHour      |   message                  |
      | Васил Иванов     |vasil@abv.bg   |2021,10,10,13,30 | Резервирахте час успешно!  |
      |                  |vasil@abv.bg   |2021,10,10,13,30 | Въведете име!              |
      | Васил Иванов     |not valid Email|2021,10,10,13,30 | Невалидна електронна поща! |
      | Васил Иванов     |               |2021,10,10,13,30 | Невалидна електронна поща! |
      | Васил Иванов     |vasil@abv.bg   |2021,12,22,10,30 | Избраната дата е заета!    |