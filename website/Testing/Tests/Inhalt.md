# Generelle Informationen

## Smoketests
- Wöchentlich durchgeführt
- Testen der Grundfunktionen

**Mock** bedeutet, dass zur durchführung des Tests eine Funktionen "gemocked" wurde bzw. nicht die schlussendliche Funktion wiederspiegelt.
Bei den Mock-Smoketests ist dies die Funktion des On/Off-Buttons, welcher erst nach fertigstellung des Gehäuses implementiert war.
Bei den Mock-Tests wurde hier als On/Off-Button das Starten, der Software gebraucht.
#### Die Tests
Test | Datum | Status| 
-------- | -------- | -------- |  
[(Mock) Smoketest 01](Smoketests/Smoketest_Mock01_26022025.md)|26.02.2025   | <span style="color:green;">Erfolgreich</span>   | 
[(Mock) Smoketest 02](Smoketests/Smoketest_Mock02_05032025.md) |05.03.2025  | <span style="color:green;">Erfolgreich</span>   | 
[(Mock) Smoketest 03](Smoketests/Smoketest_Mock03_12032025.md) |12.03.2025   | <span style="color:green;">Erfolgreich</span>   | 
[(Mock) Smoketest 04](Smoketests/Smoketest_Mock04_19032025.md) |19.03.2025  | <span style="color:green;">Erfolgreich</span>   | 
[(Mock) Smoketest 05](Smoketests/Smoketest_Mock05_26032025.md)|26.03.2025   | <span style="color:green;">Erfolgreich</span>   | 
[(Mock) Smoketest 06](Smoketests/Smoketest_Mock06_02042025.md) |02.04.2025   | <span style="color:green;">Erfolgreich</span>   | 
[(Mock) Smoketest 07](Smoketests/Smoketest_Mock07_09042025.md) |09.04.2025   | <span style="color:green;">Erfolgreich</span>   | 
[(Mock) Smoketest 08](Smoketests/Smoketest_Mock08_16042025.md) |16.04.2025   | <span style="color:green;">Erfolgreich</span>   | 
[Smoketest 09](Smoketests/Smoketest09_06052025.md) |06.05.2025   | <span style="color:green;">Erfolgreich</span>   | 
[Smoketest 10](Smoketests/Smoketest10_14052025.md) |14.05.2025   | <span style="color:green;">Erfolgreich</span>   | 

## Hardwaretests
Es wurden zwei Hardwaretests durchgeführt, um die einzelnen Hardwarekomponente zu testen. Der Erste nach erhalt der Hardware, der Zweite nach Einbau der Hardware in das Gehäuse.
#### Die Tests
Test | Datum | Status| 
-------- | -------- |-------- |  
[Hardwaretest 01](Hardwaretests/TestHardware01_26022025.md)  |26.02.2025 | <span style="color:green;">Erfolgreich</span>   | 
[Hardwaretest 02](Hardwaretests/TestHardware02_05052025.md) |05.05.2025  | <span style="color:green;">Erfolgreich</span>      | 


## Funktions/Integrationstests
Diese Tests überprüfen einzelne Funktionen und/oder das Zusammenspiel einzelner Module bzw. Komponenten von Fridgely.
Einfachkeitshalber wurden auch hier einzelne funktionen simuliert. Diese Tests werden mit **Mock** gekennzeichnet und in der Testbeschreibung wird näheres erläutert.
#### Die Tests
Test | Datum | Status| 
-------- | -------- |-------- |  
[(Mock) Scantest 01](Funktion_Integrationtests/Scantest_Mock01_05032025.md)| 05.03.2025  | <span style="color:green;">Erfolgreich</span>  | 
[Scantest 02](Funktion_Integrationtests/Scantest02_02042025.md)| 02.04.2025  | <span style="color:green;">Erfolgreich</span>  | 
[Scantest 03](Funktion_Integrationtests/Scantest03_05052025.md)| 05.05.2025  | <span style="color:green;">Erfolgreich</span>  | 
[Gamelooptest 01](Funktion_Integrationtests/Gamelooptest01_08052025.md)| 08.05.2025  | <span style="color:green;">Erfolgreich</span>  | 
[Rezepttest 01](Funktion_Integrationtests/Rezepttest01_02042025.md)| 02.04.2025  | <span style="color:green;">Erfolgreich</span>  | 
[Rezepttest 02](Funktion_Integrationtests/Rezepttest02_07052025.md)| 07.05.2025  | <span style="color:green;">Erfolgreich</span>  | 
[Sprachtest 01](Funktion_Integrationtests/Sprachtest01_26022025.md)| 26.02.2025  | <span style="color:green;">Erfolgreich</span>  | 



## Langzeittests
Eigentlich war nur ein Langzeittest geplant, um zu überprüfen, dass Fridgely auch nach 6h noch betriebsfähig ist. Da der Erste aber fehlschlug, wurd ein zweiter Test geplant und durchgeführt.

Test | Datum | Status|
-------- | -------- |-------- |  
[Langzeittest 01](Langzeittests/Langzeittest01_06052025.md) |06.05.2025   | <span style="color:red;">Failed</span>   | 
[Langzeittest 02](Langzeittests/Langzeittest02_14052025.md) |14.05.2025  | <span style="color:green;">Erfolgreich</span>      | 


## Abnahmetest
Test | Datum | Status| 
-------- | -------- |-------- |  
[Abnahmetest](Abnahmetest_Entwurf.md)| 29.05.2025  | **TBD**  | 
