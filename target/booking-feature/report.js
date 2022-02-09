$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("uni/fmi/booking/BookingAnDate.feature");
formatter.feature({
  "line": 1,
  "name": "Запазване на час при зъболекар от гост-потребител",
  "description": "",
  "id": "запазване-на-час-при-зъболекар-от-гост-потребител",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Запазване на час при зъболекар от гост-потребител",
  "description": "",
  "id": "запазване-на-час-при-зъболекар-от-гост-потребител;запазване-на-час-при-зъболекар-от-гост-потребител",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Гост-потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе име \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе адрес за електронна поща \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Избере час  \u003cfreeHour\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натисне бутона за резервиране час",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение: \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "запазване-на-час-при-зъболекар-от-гост-потребител;запазване-на-час-при-зъболекар-от-гост-потребител;",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "freeHour",
        "message"
      ],
      "line": 12,
      "id": "запазване-на-час-при-зъболекар-от-гост-потребител;запазване-на-час-при-зъболекар-от-гост-потребител;;1"
    },
    {
      "cells": [
        "Васил Иванов",
        "vasil@abv.bg",
        "2021,10,10,13,30",
        "Резервирахте час успешно!"
      ],
      "line": 13,
      "id": "запазване-на-час-при-зъболекар-от-гост-потребител;запазване-на-час-при-зъболекар-от-гост-потребител;;2"
    },
    {
      "cells": [
        "",
        "vasil@abv.bg",
        "2021,10,10,13,30",
        "Въведете име!"
      ],
      "line": 14,
      "id": "запазване-на-час-при-зъболекар-от-гост-потребител;запазване-на-час-при-зъболекар-от-гост-потребител;;3"
    },
    {
      "cells": [
        "Васил Иванов",
        "not valid Email",
        "2021,10,10,13,30",
        "Невалидна електронна поща!"
      ],
      "line": 15,
      "id": "запазване-на-час-при-зъболекар-от-гост-потребител;запазване-на-час-при-зъболекар-от-гост-потребител;;4"
    },
    {
      "cells": [
        "Васил Иванов",
        "",
        "2021,10,10,13,30",
        "Невалидна електронна поща!"
      ],
      "line": 16,
      "id": "запазване-на-час-при-зъболекар-от-гост-потребител;запазване-на-час-при-зъболекар-от-гост-потребител;;5"
    },
    {
      "cells": [
        "Васил Иванов",
        "vasil@abv.bg",
        "2021,12,22,10,30",
        "Избраната дата е заета!"
      ],
      "line": 17,
      "id": "запазване-на-час-при-зъболекар-от-гост-потребител;запазване-на-час-при-зъболекар-от-гост-потребител;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Запазване на час при зъболекар от гост-потребител",
  "description": "",
  "id": "запазване-на-час-при-зъболекар-от-гост-потребител;запазване-на-час-при-зъболекар-от-гост-потребител;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Гост-потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе име \"Васил Иванов\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе адрес за електронна поща \"vasil@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Избере час  2021,10,10,13,30",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натисне бутона за резервиране час",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение: \"Резервирахте час успешно!\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BookingAnHourSteps.openBookingAnHourScreen()"
});
formatter.result({
  "duration": 208749600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Васил Иванов",
      "offset": 12
    }
  ],
  "location": "BookingAnHourSteps.addName(String)"
});
formatter.result({
  "duration": 3911300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vasil@abv.bg",
      "offset": 33
    }
  ],
  "location": "BookingAnHourSteps.addEmail(String)"
});
formatter.result({
  "duration": 106700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021",
      "offset": 12
    },
    {
      "val": "10",
      "offset": 17
    },
    {
      "val": "10",
      "offset": 20
    },
    {
      "val": "13",
      "offset": 23
    },
    {
      "val": "30",
      "offset": 26
    }
  ],
  "location": "BookingAnHourSteps.addHour(int,int,int,int,int)"
});
formatter.result({
  "duration": 3356500,
  "status": "passed"
});
formatter.match({
  "location": "BookingAnHourSteps.clickBookingAnHourButton()"
});
formatter.result({
  "duration": 11598800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Резервирахте час успешно!",
      "offset": 18
    }
  ],
  "location": "BookingAnHourSteps.checkMessage(String)"
});
formatter.result({
  "duration": 1565100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Запазване на час при зъболекар от гост-потребител",
  "description": "",
  "id": "запазване-на-час-при-зъболекар-от-гост-потребител;запазване-на-час-при-зъболекар-от-гост-потребител;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Гост-потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе име \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе адрес за електронна поща \"vasil@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Избере час  2021,10,10,13,30",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натисне бутона за резервиране час",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение: \"Въведете име!\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BookingAnHourSteps.openBookingAnHourScreen()"
});
formatter.result({
  "duration": 91500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    }
  ],
  "location": "BookingAnHourSteps.addName(String)"
});
formatter.result({
  "duration": 70400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vasil@abv.bg",
      "offset": 33
    }
  ],
  "location": "BookingAnHourSteps.addEmail(String)"
});
formatter.result({
  "duration": 82200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021",
      "offset": 12
    },
    {
      "val": "10",
      "offset": 17
    },
    {
      "val": "10",
      "offset": 20
    },
    {
      "val": "13",
      "offset": 23
    },
    {
      "val": "30",
      "offset": 26
    }
  ],
  "location": "BookingAnHourSteps.addHour(int,int,int,int,int)"
});
formatter.result({
  "duration": 165200,
  "status": "passed"
});
formatter.match({
  "location": "BookingAnHourSteps.clickBookingAnHourButton()"
});
formatter.result({
  "duration": 73400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете име!",
      "offset": 18
    }
  ],
  "location": "BookingAnHourSteps.checkMessage(String)"
});
formatter.result({
  "duration": 80900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Запазване на час при зъболекар от гост-потребител",
  "description": "",
  "id": "запазване-на-час-при-зъболекар-от-гост-потребител;запазване-на-час-при-зъболекар-от-гост-потребител;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Гост-потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе име \"Васил Иванов\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе адрес за електронна поща \"not valid Email\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Избере час  2021,10,10,13,30",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натисне бутона за резервиране час",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение: \"Невалидна електронна поща!\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BookingAnHourSteps.openBookingAnHourScreen()"
});
formatter.result({
  "duration": 75700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Васил Иванов",
      "offset": 12
    }
  ],
  "location": "BookingAnHourSteps.addName(String)"
});
formatter.result({
  "duration": 83300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not valid Email",
      "offset": 33
    }
  ],
  "location": "BookingAnHourSteps.addEmail(String)"
});
formatter.result({
  "duration": 91400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021",
      "offset": 12
    },
    {
      "val": "10",
      "offset": 17
    },
    {
      "val": "10",
      "offset": 20
    },
    {
      "val": "13",
      "offset": 23
    },
    {
      "val": "30",
      "offset": 26
    }
  ],
  "location": "BookingAnHourSteps.addHour(int,int,int,int,int)"
});
formatter.result({
  "duration": 243500,
  "status": "passed"
});
formatter.match({
  "location": "BookingAnHourSteps.clickBookingAnHourButton()"
});
formatter.result({
  "duration": 115900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалидна електронна поща!",
      "offset": 18
    }
  ],
  "location": "BookingAnHourSteps.checkMessage(String)"
});
formatter.result({
  "duration": 54000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Запазване на час при зъболекар от гост-потребител",
  "description": "",
  "id": "запазване-на-час-при-зъболекар-от-гост-потребител;запазване-на-час-при-зъболекар-от-гост-потребител;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Гост-потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе име \"Васил Иванов\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе адрес за електронна поща \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Избере час  2021,10,10,13,30",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натисне бутона за резервиране час",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение: \"Невалидна електронна поща!\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BookingAnHourSteps.openBookingAnHourScreen()"
});
formatter.result({
  "duration": 69000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Васил Иванов",
      "offset": 12
    }
  ],
  "location": "BookingAnHourSteps.addName(String)"
});
formatter.result({
  "duration": 73000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "BookingAnHourSteps.addEmail(String)"
});
formatter.result({
  "duration": 48500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021",
      "offset": 12
    },
    {
      "val": "10",
      "offset": 17
    },
    {
      "val": "10",
      "offset": 20
    },
    {
      "val": "13",
      "offset": 23
    },
    {
      "val": "30",
      "offset": 26
    }
  ],
  "location": "BookingAnHourSteps.addHour(int,int,int,int,int)"
});
formatter.result({
  "duration": 152000,
  "status": "passed"
});
formatter.match({
  "location": "BookingAnHourSteps.clickBookingAnHourButton()"
});
formatter.result({
  "duration": 63200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалидна електронна поща!",
      "offset": 18
    }
  ],
  "location": "BookingAnHourSteps.checkMessage(String)"
});
formatter.result({
  "duration": 53500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Запазване на час при зъболекар от гост-потребител",
  "description": "",
  "id": "запазване-на-час-при-зъболекар-от-гост-потребител;запазване-на-час-при-зъболекар-от-гост-потребител;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Гост-потребителя отваря екрана за запазване на час",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе име \"Васил Иванов\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе адрес за електронна поща \"vasil@abv.bg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Избере час  2021,12,22,10,30",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натисне бутона за резервиране час",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Вижда съобщение: \"Избраната дата е заета!\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BookingAnHourSteps.openBookingAnHourScreen()"
});
formatter.result({
  "duration": 126000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Васил Иванов",
      "offset": 12
    }
  ],
  "location": "BookingAnHourSteps.addName(String)"
});
formatter.result({
  "duration": 64800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vasil@abv.bg",
      "offset": 33
    }
  ],
  "location": "BookingAnHourSteps.addEmail(String)"
});
formatter.result({
  "duration": 48800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021",
      "offset": 12
    },
    {
      "val": "12",
      "offset": 17
    },
    {
      "val": "22",
      "offset": 20
    },
    {
      "val": "10",
      "offset": 23
    },
    {
      "val": "30",
      "offset": 26
    }
  ],
  "location": "BookingAnHourSteps.addHour(int,int,int,int,int)"
});
formatter.result({
  "duration": 167400,
  "status": "passed"
});
formatter.match({
  "location": "BookingAnHourSteps.clickBookingAnHourButton()"
});
formatter.result({
  "duration": 135200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Избраната дата е заета!",
      "offset": 18
    }
  ],
  "location": "BookingAnHourSteps.checkMessage(String)"
});
formatter.result({
  "duration": 75600,
  "status": "passed"
});
});