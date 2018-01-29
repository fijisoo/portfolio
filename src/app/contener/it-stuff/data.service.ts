import { OnInit } from '@angular/core';
import { Question } from "./question.model";

export class itStuffDataService implements OnInit{
  private questionsArray: Question[] = [
    new Question(
      'Co to jest framework?',
      'Framework to narzędzie które definiuje metodę budowy aplikacji oraz mechanizm jej działania',
      ['ogólne', 'framework']
    ),
    new Question(
      'Co to jest angular?',
      'Angular to Framework oparty na języku JavaScript, wspomagający tworzenie i rozwój aplikacji internetowych na SPA. Opiera się na wzorcu MVC aby ułatwić ich rozwój i testowanie',
      ['ogólne', 'angular']
    ),
    new Question(
      'Co to są wzroce projektowe?',
      'Wzorce projektowe to sposoby na rozwiązanie powszechnego problemu, sytuacji, z którą możemy się spotkać w czasie projektowania aplikacji. Wzorzec określa dany problem, prezentując jedno, lub więcej jego rozwiązanie.',
      ['ogólne', 'wzorce-programowania', 'mvc', 'singleton']
    ),
    new Question(
      'Jakie znasz wzorce projektowe? Scharakteryzuj poszczególne',
      'MVC - Model, View, Controler. Pozwala na oddzielenie od siebie warstwy modelu (baza danych, pliki), warstwy widoku (html,  rss) i warstwy kontrolującej całą aplikacje' +
      'Singleton - ',
      ['ogólne', 'wzorce-programowania', 'mvc', 'singleton']
    ),
    new Question(
      'Język silnie/ściśle typowany vs słabo/luźno typowany; Język statycznie typowany vs dynamicznie typowany?',
      '',
      ['ogólne','javascript']
    ),
    new Question(
      'Co to jest Programowanie deklaratywne?',
      '',
      ['ogólne','paradygmaty programowania']
    ),
    new Question(
      'Co to jest Programowanie imperatywne?',
      '',
      ['ogólne','paradygmaty programowania']
    ),
    new Question(
      'Co to jest CLI?',
      'CLI czyli Comand Line Interface. Dla angulara można zainstalować dedykowane CLI które służy do inicjalizowania, wspierania, budowania i utrzymywania aplikacji angularowych.',
      ['ogólne', 'angular', 'CLI']
    ),
    new Question(
      'Jakie znacz komendy w angularowym CLI?',
      'ng generate component *nazwa* / ng g c *nazwa* / ng g c *nazwa* --spec false' +
      'ng generate directive *nazwa* / ng g d *nazwa* / ng g d *nazwa* --spec false' +
      'ng serve' +
      'ng new *nazwa*',
      ['CLI', 'angular', 'ogólne']
    ),
    new Question(
      'Co to jest TypeScript?',
      'TypeScript to język programowania stworzonym przez Microsoft. Wykorzystywany w Angularze. Jest rozszerzeniem Javascriptu gdyż umożliwia na tworzenie Interfaceów, Enumów, zmiennych o określonych typach. Wynikiem kompilacji kodu TypeScriptowego jest JavaScript',
      ['TypeScript', 'ogólne', 'angular']
    ),
    new Question(
      'Jak dodać np. bootstrap\'a do projektu w Anagular',
      'W pliku .angular-cli.json który znajduje się w foldere src możemy dodać rozszerzenia. Aby ustawienia zostały zapisane musimy zrestartować serwer',
      ['angular']
    ),
    new Question(
      'Z czego składa się projekt w Angular?',
      'folder e2e służy to testowania aplikacji, folder node_modules to biblioteki z których korzystamy w aplikacji, src to nasza aplikacja, wraz z ustawieniami - co kiedy się wczytuje co zawiera itd.',
      ['angular']
    ),
    new Question(
      'Jaka jest kolejność ładowania plików aplikacji?',
      'Najważniejszym plikiem w projekcie angularowym jest main.ts który ładuje nam AppModule. W AppModule w dekoratorze @NgModule mamy własność bootstrap która pozwala nam określić komponent główny - pierwszy ładowany komponent, komponent ' +
      'który inicjujemy w pliku index.html będący jedynym plikiem pobieranym przez uzytkownika - nasze SPA.',
      ['angular']
    ),
    new Question(
      'Co to są komponenty?',
      'Komponenety to części składowe interfejsu użytkownika naszej aplikacji. Na komponent składają się pliki html - szablon, css - style, ts - mechanika, spec - testy.' +
      'Dekorator @Component definiuje komponenet. Wymagane jest żeby w dekoratorze @Component uwzględnić template. Każdy komponent musi być wykorzystywany przez inny komponent lub przez aplikację i musi należeć do NgModule.' +
      'Aby korzystać z komponentu należy dodać go do declarations w NgModule.',
      ['angular', 'component']
    ),
    new Question(
      'Z czego się składa komponent?',
      'plik html - widok komponentu w którym okreslamy położenie elementów oraz wyświetlamy / pobieramy dane, definiowany jest w pliku ' +
      'plik css - style komponentu, które dzięki własności encapsulation mogą być stylami globalnymi dla całej aplikacji,' +
      'plik klasy komponentu (.ts) - jest główną klasą komponentu (sercem komponentu), zawiera metadane na temat komponentu.' +
      'plik spec - służy do przeprowadzania testów',
      ['angular', 'component']
    ),
    new Question(
      'Do czego służy komponent?',
      'Komponent wykorzystujemy do budowy składowych elementów aplikacji.',
      ['angular', 'component']
    ),
    new Question(
      'Jak tworzy się komponent?',
      'Komponent tworzymy w elemencie(komponencie) w którym ma się znajdować. Do stworzenia komponentu korzystamy z CLI albo tworzymy nowy folder w którym będziemy przechowywać nasze pliki komponentu.' +
      'Za pomocą CLI wygląda to następująco: >ng generate component *nazwa_komponentu*  .Inną opcją jest skrócona wersja: >ng g c *nazwa_komponentu*.' +
      'Aby pominąć plik konfiguracyjny spec należy wykonać: >ng g c *nazwa_komponentu* --spec false.' +
      'Ręcznie komponent tworzymy następująco: Najpierw tworzymy klasę: export class NazwaKomponentuComponent{}, nad klasą umieszczamy dekorator @Component({}), importujemy Component: import { Component } from \'@angular/core\'' +
      'w Dekoratorze umieszczamy własności takie jak selector: [selectorName], templateUrl: [templatePath], styleUrls: [CSSPath] - to są podstawowe. Dodatkowe takie jak encapsulation albo providers w zależności od zapotrzebowania.' +
      'Komponent koniecznie musi zawierać własność template.',
      ['angular', 'component']
    ),
    new Question(
      'Jak zagnieżdżać komponenty?',
      'Zagnieżdżanie komponentów czyli Nested components. Zagnieżdżanie polega tym że w jednym komponencie możemy zawierać inne dzięki czemu opracowujemy detale i mamy do nich dostęp w prosty sposób.' +
      'Zagnieżdżanie odbywa się w template gdzie poprzez przypisany komponentowi selektor zakotwiczam w wybranym przez nas miejscu: \<sekeltorKomponentu\>\<\/sekeltorKomponentu\>' +
      'możliwe jest wrzucenie kodu do zagnieżdżonego komponentu kodu z pozycji template. dzieje sie to w ten sposób że pomiędzy znaczniki selektorKomponentu wrzucamy kod który chcemy \'przesłać\' do zagnieżdżonego komponentu.' +
      'Wówczas w zagnieżdżonym komponencie w miejscu gdzie ma się wyświetlić owe wrzucenie kodu określamy znacznikami \<ng-content\>\<\/ng-content\>',
      ['angular', 'component', 'ng-content']
    ),
    new Question(
      'Jak można wyróżnić właściwości dekoratora @Component() w komponencie?',
      'templateUrl - główna właściwość, odpowiedzialna za szablon, podajemy ścieżkę templatki.' +
      'template - alternatywa dla templateUrls. Uzupełniamy HTMLem.' +
      'styleUrls - ścieżka do styli.' +
      'styles - kod styli wykorzystanych w komponencie' +
      'selector - nazwa i sposob implementacji komponentu' +
      'encapsulation - ustawienia styli: globalne/lokalne' +
      'providers - instancja klasy serwisu dostępna dla komponentu i wszystkich dzieci komponentu',
      ['angular', 'component']
    ),
    new Question(
      'Co to Data Binding?',
      'Data Binding to inaczej sposób wiązania danych. Wyróżniamy takie wiązania jak Interpolacyjne {{}} w którym zawieramy zmienną tekstową lub prostą liczbową,' +
      'za pomocą string interpolation możemy jedynie wyświetlać dane.' +
      'Property Binding inaczej też One-way binding ponieważ taki typ wiązania pozwala reagować jedynie na zmiany zachodzące w komponencie(w pliku .ts).' +
      'Property binding pozwala na przesyładnie danychy w jednym kierunku, z danych komponenta do własności danego elementu. Property binding ustawia property elementu ale nie odczytuje jej własności' +
      '[property]="wiązanie"' +
      'Event Binding w przeciwieństwie to Interpolacji i Wiązań Własności nie polega na przesyłaniu danych z komponentu do szablonu ale na odwrót. ' +
      'Event Biding reaguje na zdarzenia użytkownika z poziomu widoku i przekazuje je do komponentu. Możliwe jest także skorzystanie z obiektu $event który przechowuje wszystkie dane o elemencie.' +
      'Za jego pomocą można przekazać dane do komponentu. Przy wykorzystaniu wbudowanej klasy EventEmitter możliwe jest stworzenie kustomowych eventów. wywołując metodę emit() aktywujemy event , a przekazując jej dane możemy wysłać je dalej.' +
      '(zmiennaEventEmitter)="funkcja($event)" albo (input)="currentInput.value = $event.target.value"' +
      'Two-way Binding umożliwia nam wyświetlenie informacji reagujących na zdarzenia oraz reagujących na zmiany zachodzące w komponencie. Jest połączeniem Property Binding i Event Binding.' +
      'Przypomina pudełko bananów ;)) [()] tak więc: ' +
      '[(value)]="zmienna"',
      ['angular', 'data-binding', 'component', 'service']
    ),
    new Question(
      'Jakie znasz rodzaje Data Binding?',
      'String Interpolation, Property Binding, Two-way Binding, event Binding',
      ['angular', 'data-binding', 'component', 'service', 'string-interpolation', 'property-binding', 'two-way-binding', 'event-binding']
    ),
    new Question(
      'Co to jest String Interpolation',
      'Wiązanie Interpolacyjne oznacza się dwoma klamrami otwartymi i zamkniętymi - {{}}. String Interpolation pozwala nam na wyświetlanie zmiennych tekstowych lub prostych liczbowych. Pozwala nam także obsłużyć proste działania matematyczne a także' +
      'zawrzeć funkcję komponentu które zwracają proste dane konwertowalne na stringa. Poza tym możemy skorzystać z operatorów: | , ?. , !. oraz funkcji Pipe (uppercase, lowercase, json ...',
      ['angular', 'string-interpolation', 'component']
    ),
    new Question(
      'Co to jest Property Binding?',
      'Property Binding inaczej One-way Binding pozwala nam przesyłać dane z komponentu do widoku - template. Służy do wiązania parametrów elementu z danymi komponentu. za pomocą Property Binding wiąże się elementy takie jak np. ngClass, ngStyle.' +
      '[nazwaWłasności]="wartość"',
      ['angular', 'property-binding', 'component', 'service']
    ),
    new Question(
      'Co to jest Two-way Binding',
      'Two-way Binding pozwala przesyłac wartości do własności elementu ale także w przypadku zmiany wartości własności elementu przez użytkownika aplikacji pozwala odczytać tą wartość i przesłać ją do komponentu' +
      '[(nazwaWłasności)]="wartość".',
      ['angular', 'two-way-binding', 'component']
    ),
    new Question(
      'Co to jest Event Binding',
      'Event Binding reaguje na zdarzenia. W przypadku gdy użytkownik wykonuje akcję na określonym elemencie możemy pobrać informacje o "zmienionym" elemencie i zareagować na nie. ' +
      'Event Binding pozwala pobrać wszystkie informacje o danym elemencie dzięki obiektowi $event. Pozwala także skorzystać z klasy EventEmitter za pomocą której możemy aktywować kustomowy event i przesłać go do np. komponentu nadrzędnego.' +
      '(zmiennaEventEmitter)="funkcja($event)" albo (input)="currentInput.value = $event.target.value"',
      ['angular', 'event-binding', 'component', 'service']
    ),
    new Question(
      'Co to jest Dyrektywa',
      'Dyrektywy służą nam do zmiany struktury widoku oraz do zmiany własności elementów widoku. ',
      ['angular', 'directive']
    ),
    new Question(
      'Jak dzielimy Dyrektywy?',
      'Na komponenty, dyrektywy strukturalne i dyrektywy atrybutów. Komponenty to dyrektywy z widokiem. Dyrektywy strukturalne to takie które wpływają na DOM tworząc lub usuwając elementy. ' +
      'Dyrektywy atrybutów wpływają na wygląd lub zachowanie elementów DOM nie zmieniając jego struktury. Dyrektywy strukturalne poprzedzone są gwiazdką (np *ngFor), a dyrektywy' +
      'atrybutów (wbudowane) najczęściej przypominają property binding ( np. [ngClass], [ngStyle] ) gdyż paramentrem najczęściej nie jest sam string. Mozna także stworzyć' +
      'własne dyrektywy (custom directives) które także należy poprzedzić gwiazdką jeżeli chcemy manipulować w DOM',
      ['angular', 'directive']
    ),
    new Question(
      'Jak tworzymy własne dyrektywy',
      'Najlepiej dyrektywy umieszczać w jednym folderze. Np directives.' +
      'ng g d *nazwa_dyrektywy*. ' +
      'Ręcznie: tworzymy plik o rozszerzeniu .directive.ts, następnie tworzymy w nim klasę. W niej w konstruktorze tworzymy instancje klasy Renderer2 oraz ElementRef. Rendererem tworzymy nowe elementy, zmieniamy własności elementów, ElementRef pobieramy elementy.',
      ['angular', 'directive']
    ),
    new Question(
      'Wymień wbudowane dyrektywy i je podziel',
      'dyrektywy strukturalne: *ngFor, *ngIf, *ngSwitch. ' +
      'dyrektywy atrybutów: [ngStyle], [ngClass]',
      ['angular', 'directive']
    ),
    new Question(
      'Jak planować aplikacje w angularze i co w niej uwzględnić?',
      'Zaczynamy od ficzerów aplikacji - co ma robić aplikacja. Następnie ustalamy jakie komponenty będą nad ficzerami tak żeby dobrze je skomunikować.' +
      'Później przechodzimy do poszczególnych ficzerów, co w nich uwzględnimy - ustalamy jakie komponenty będą zawarte w pojedyńczym ficzerze. Te komponenty powinny być znaczące dla naszych ficzerów.' +
      'Następnie ustalamy jakie dane będą przechowywane w naszych ficzerach i ustalamy model naszych danych. ',
      ['angular', 'ogólne']
    ),
    new Question(
      'Co to debugowanie?',
      'Debugowanie pozwala na detekcję i eliminowanie błędów w aplikacji.',
      ['ogólne', 'debugging']
    ),
    new Question(
      'Jak debugować w angularze?',
      'Za pomocą Inspektora w przeglądarce lub za pomocą wtyczek np. Augury',
      ['angular', 'debugging']
    ),
    new Question(
      'Jak przesyłać dane między komponentami?',
      'Za pomocą Proprety property albo Event Binding. Aby wysłać dane z komponentu rodzic do komponentu dziecko należy w miejscu zakotwiczenia komponentu dziecko poprzez property binding przesłać dane ->' +
      '[zmiennaDostępnaZPoziomuKomponentDziecko] = "wartośćPobranaDoKomponentuRodzic". Wówczas aby pobrać własność zmiennaDostępnaZPoziomuKomponentDziecko należy użyć dekoratora Input (wcześniej należy zaimportować jego klasę), tak więc zmienna pobrana będzie wyglądała:' +
      '@Input() zmiennaDostępnaZPoziomuKomponentDziecko.' +
      'Aby przesłać dane z komponentu Dziecko do komponentu Rodzic należy wykorzystać Event Binding oraz klasę EventEmitter. wiązanie elementów odbywa się w następujący sposób:' +
      'w zakotwiczonym komponencie Dziecko umieszczamy event który w nazwie przechowuje zmienną typu EventEmitter. Ta zmienna znajduje się w komponencie dziecko, gdyż detekcję identyfikujemy w komponencie Dziecko.' +
      'Pobieramy zmienną za pomocą funkcji a dane odbieramy dzięki obiektowi $event. Wygląda to następująco:' +
      'W zakotwiczonym komponencie Dziecko: (zmiennaTypuEventEmitterDostępnaZPoziomuKomponentDziecko)="funkcjaPobierającaDaneDoKomponentuRodzic($event). Tak więc zmiennaTypuEventEmiter znajduje się w Komponencie Dziecko i deklaruje się ją następująco:' +
      'zmiennaTypuEventEmitter = EventEmitter\<typDanychPrzesyłanych\>(). Następnie tak ustawioną zmienną za pomocą funkcji emitujemy dalej:' +
      'jakasFunkcja(){ this.zmiennaTypuEventEmitter.emit( tutaj_dane_przesyłane ); }',
      ['angular','data-binding', 'Input', 'Output']
    ),
    new Question(
      'Jak aliasować bindowane właściwości?',
      'Jak mamy Property Binding na elemencie komponentu Dziecko np: [właściwość]="wartość" to możemy pobrać taką właściwość albo za pomocą ' +
      '@Input() właściwość; albo za pomocą @Input(\'właściwość\') zmienna; ' +
      'Tak samo z event Binding na relacjach Komponentów Rodzic - Dziecko: ' +
      'jak mamy (costamDziecko) = "pobierzDane($event) to tą daną cośtamDziecko dostępną poza komponentem możemy aliasować: ' +
      '@Output() costamDziecko = EventEmitter\<typDanych\>() lub @Output(\'costamDziecko\') zmienna = EventEmitter\<typDanych\>()',
      ['angular', 'data-binding', 'property-binding', 'event-binding', 'aliasing']
    ),
    new Question(
      'Co to jest View Encapsulation i do czego służy oraz jak korzystać?',
      'Każdy komponent może posiadać własny arkusz styli. Domyślnie style zastosowane w komponencie dotyczą tylko i wyłącznie konkretnego komponentu.View Encapsulation to inaczej własność kapsułkowania widoku - klasa dostępna z wbudowanej biblioteki @angular/core. Służy do zmany ustawienia styli z kapsułkowanych na globlane dla całej aplikacji. w przypadku ustawienia styli na globalne wszystkie inne style komponentów' +
      'zostają dezaktywowane. Docelowo kapsułkowanie jest ustawione na ViewEncapsulation.Emulated i ustawia style na dostępne tylko dla określonych komponentów. Aby zrezygnować z kapsułkowania styli i ustawić na globalne, przypisujemy Komponentowi własność encapsulation: ViewEncapsulation.None. co ustawia style tego komponentu jako globalne.' +
      'Możliwe jest także skorzystanie z ViewEncapsulation.Native, wówczas style korzystają z technologi Shadow DOM.',
      ['angular', 'view-encapsulation', 'component']
    ),
    new Question(
      'Co to jest Local References i do czego służy oraz jak korzystać?',
      'Lokalne referencje polegają na oznaczeniu elementu który później możemy przesłać do komponentu wraz ze wszystkimi informacjami na temat takiego elementu.' +
      'Interesujący nas element markujemy lokalną referencją: #NaszCiekawyElement. Następnie w każdym miejscu w naszym szablonie możemy wykorzystać wszystkie własności takiego elementu.' +
      'Np gdy mamy input oznaczony #NaszCiekawyElement i ktoś wpisze wartość do takiego inputa za pomocą kliknięcia i przekazania lokalnej referencji możemy wysłac informację o elemencie dalej np. do naszego komponentu: <input #localReference> <button (click)="funkcja(localReference)/>" ' +
      'Aby odebrać tak przesłany element funkcja powinna odbierać dane jako element HTML dlatego też: funkcja(dane: HTMLInputElement){ this.jakasZmienna = dane.value }' +
      'Możemy także wykorzystać #localReference w każdym miejscu naszej template wyświetlając właściwości elementu za pomocą string interpolation: {{localReference.własność}}',
      ['angular', 'local-reference', 'template']
    ),
    new Question(
      'Co to jest View Child, do czego służy i jak wykorzystywać?',
      '',
      ['angular', 'view-child', 'local-reference', 'decorator']
    ),
    new Question(
      'Co to jest Content Child, do czego służy i jak wykorzystywać?',
      '',
      ['angular', 'ng-content', 'content-child', 'decorator']
    ),
    new Question(
      'Co to jest Lifecycle Hooks? Jakie znasz? do czego służą? Jaka kolejność? Które mają dostęp do Template?',
      '',
      ['angular', 'lifecycle-hook', 'ngOnInit', 'ngOnDestroy', 'template']
    ),
    new Question(
      'Co to jest Renderer? Co to ElementRef, a co to Local Reference? Różnice / zalety / wady',
      '',
      ['angular', 'view-child', 'view-children', 'content-child', 'content-children', 'element-ref','renderer', 'decorator']
    ),
    new Question(
      'Co to jest Host Listener?',
      '',
      ['angular', 'host-listener', 'host-binding', 'event', 'decorator']
    ),
    new Question(
      'Co to jest Host Binding?',
      '',
      ['angular', 'host-listener', 'host-binding', 'event', 'directive', 'decorator']
    ),
    new Question(
      'Jak wykorzystać Host Listener i Host Binding w dyrektywach?',
      '',
      ['angular', 'host-listener', 'host-binding', 'event', 'directive', 'decorator']
    ),
    new Question(
      'Gdzie wykorzystujemy TemplateRef oraz ViewContainerRef',
      '',
      ['angular', 'directive', 'structural-directive', 'template-ref', 'view-container-ref', 'decorator']
    ),
    new Question(
      'Jak działa *ngIf?',
      '',
      ['angular', 'directive', 'structural-directive']
    ),
    new Question(
      'Co to jest wstrzykiwanie zależności?',
      '',
      ['angular', 'dependency-injection', 'service', 'providers', 'injectable', 'decorator']
    ),
    new Question(
      'Co to są Services? Co zawierają? Do czego służą? Jak tworzymy? Jak zagnieżdżamy?',
      '',
      ['angular', 'service']
    ),
    new Question(
      'Co to Hierarchical Injector? Jaka jest hierarchia?',
      '',
      ['angular', 'service', 'providers', 'injectable', 'dependency-injection']
    ),
    new Question(
      'Ile Services należy mieć w aplikacji? Jak Services pośredniczy w komunikacji między komponentami?',
      '',
      ['angular', 'service', 'component', 'data-binding', 'event-emmiter']
    ),
    new Question(
      'Co to Router?',
      '',
      ['angular', 'router', 'module', 'routing']
    ),
    new Question(
      'Co to Routes i jaka jest różnica między Routerem',
      '',
      ['angular', 'router', 'routes', 'routing']
    ),
    new Question(
      'Jak mapować linki?',
      '',
      ['angular', 'module', 'router', 'routes', 'path', 'routing']
    ),
    new Question(
      'Jak nawigować z pozycji template i z pozycji środka komponentu?',
      '',
      ['angular', 'navigate', 'router', 'routes', 'activated-route', 'activated-route-snapshot','routing', 'relative-path' ]
    ),
    new Question(
      'Jakie parametry może przyjmować "navigate"? ',
      '',
      ['angular', 'navigate', 'relative-to', 'query-params', 'fragment', 'preserve-query-params', 'query-params-handling', 'routing']
    ),
    new Question(
      'Jakie własności poza "path" i "component" przyjmuje obiekt Routes?',
      '',
      ['angular', 'routes', 'path', 'routing', 'redirect-to', 'childrens']
    ),
    new Question(
      'Jak tworzyć odnośniki na inne strony z pozycji template? Jak stylować linki w nawigacji? jakie są dodatkowe opcje?',
      '',
      ['angular', 'navigation', 'navigate', 'router-link', 'router-link-active', 'router-link-active-options', 'exact', 'routing']
    ),
    new Question(
      'Jak mapować linki w oddzielnym pliku? Co to za plik?',
      '',
      ['angular', 'module', 'router', 'routes', 'path', 'routing']
    ),
    new Question(
      'Jak przekazywać zmienne w linku?',
      '',
      ['angular', 'module', 'router', 'routes', 'path', 'params', 'query-params', 'fragment', 'preserve-query-params', 'query-params-handling', 'routing']
    ),
    new Question(
      'Jak pobierać zmienne z linku??',
      '',
      ['angular', 'module', 'router', 'routes', 'path', 'params', 'subscribe', 'query-params', 'fragment', 'preserve-query-params', 'query-params-handling', 'routing']
    ),
    new Question(
      'Co to Fragments?',
      '',
      ['angular', 'module', 'router', 'routes', 'fragment', 'routing']
    ),
    new Question(
      'Co queryParams?',
      '',
      ['angular', 'module', 'router', 'routes', 'query-params', 'routing']
    ),
    new Question(
      'Jak zagnieżdżać linki?',
      '',
      ['angular', 'module', 'router', 'routes', 'path', 'childrens', 'routing']
    ),
    new Question(
      'Jak przekierowywać niezmapowane linki?',
      '',
      ['angular', 'module', 'router', 'routes', 'path', 'childrens', 'nested-routes', 'routing']
    ),
    new Question(
      'Co to Guardy?',
      '',
      []
    ),
    new Question(
      'Do czego służy funkcja apply i jak ją stosować?',
      '',
      ['javascript']
    ),
    new Question(
      'Różnica między klasą abstrakcyjną a interfejsem?',
      '',
      ['javascript', 'typescript', 'ogólne']
    ),
    new Question(
      'Zalety i wady TypeScript?',
      'TypeScript jest językiem mocno typowanym to znaczy że zmienne mają określone typy i nie możemy określonej zmiennej przypisać innego typy zmiennej. ' +
      'TypeScript pozwala tworzyć Interfejsy. Jest językiem kompilowanym do JavaScriptu (nie wykonuje się w przeglądarce) dlatego też nazywa się go supersetem Javascriptowym.',
      ['typescript']
    ),
    new Question(
      'Jakie znasz typy danych w TypeScriptcie',
      'string, number, any, null, undefined, object, array, boolean, enum, dodadkowo dla function: void, never. Dla funkcji także można ustawić co mają zwracać.' +
      'let zmienna_string: string = "janusz";' +
      'let zmienna_number: number = 42' +
      'let zmienna_any: any = "cokolwiek";' +
      'let zmienna_null: null = null;' +
      'let zmienna_undefined;' +
      'let zmienna_object: {imie: string, wiek: number} = { imie: "Dominik", wiek: 24 };' +
      'let zmienna_array: [string | number] = [2, "pies"];' +
      'let zmienna_array2: string[] = ["raz", "costam"];' +
      'let zmienna_boolean : boolean = true;' +
      'let zmienna_funkcja: (val1: string, val2: number) => number;' +
      'function funkcja_never() : never { throw new Error("ta funkcja miala sie nie wykonać!!!! Cos poszlo nie tak:/") }' +
      'enum Kolory { Zielony, Niebieski, Czerwony }; let zmienna_Kolory: Kolory = Kolory.Zielony;' +
      'function funkcja_void() : void { console.log("nic_nie_zwracam hehe"); }' +
      'function funkcja_zwraca_tablicę(costam: number) : number[] { var zmienna = [costam]; return zmienna; }' +
      '',
      ['typescript']
    ),
    new Question(
      '',
      '',
      ['typescript']
    ),


  ];

  ngOnInit(){
    // this.questionsArray.push();
  }

  getQuestionsData(){
    return this.questionsArray.slice();
  }
}
