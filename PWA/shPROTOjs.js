
     let idm = Date.now();
     
   

	
function onDOMContentLoaded (){
	
	/*Подчистка лишнего вспомогательного 
совсем не конечное*/
    let foget = document.getElementById('middle_field').innerHTML;// это чисто тестовый ход, не имеющий к продакшену ничего что бы текст не мешался и лишнего не городить
		
		document.getElementById('middle_field').innerHTML='<br><h2 style= "text-align : center;" >' + Date.now() + '</h2>' ; // проверка связи
		
		
		
/*  Первое  что нужно от PWA это начать собирать json. (Вполне реально).
		пока этот json можно хранить в localStorage. (17.1.24) 
		Так как это ещё пока не PWA, a так сказать, инициирующий заряд.
		А для этого:
		сооружаем memory ....
		
		Render
		...
		(18.1.2024)
		(22.1.2024) см.proto.facet
		позоже, tg это метод gui, и ему нужен api
		(23.1.24)микро рефакторинг.
		Так. Далее: таки ...
		
		СЦЕНАРИЙ ТАКОЙ:  в аспекте отмечено что objEditor и proto
		то есть:
			
			1: получаем мемори. (это в перспективе, сейчас оно в коде прописано)
			2 запускается gui.go, который из аспекта узнает чо дальше.и поступает соответственно:
			3 т.е передант управление в данном слусае в objEditor
			- в top header пишется Proto, 
			- mid его свойства
			- top left выползание выше (levelUp)
			input поиск / фильтр по буквам
			- send меняется на + типа добавить.
			
			
		
	
*/
	let tg = {
				bottom_input : document.getElementById('bottom_input')
				,middle_field : document.getElementById('middle_field')
				,send : document.getElementById('send_button')
				,top: document.getElementById('top_header').innerHTML
				,up: document.getElementById('top_left_button')
	}

  let objEditor = {
		name : "objEditor"
		,idm : 1705624920543 
		,tip: "facet"
		,note: " расширение tg функционалом для добавления свойств объекту: "
				 /* 1) Выбор из имеющихся Select 
				- где имеющихся?
				- В memory.
				- Всех подряд? 
			NB	- Для начала да, а вообще нужны фильтры
				
					2)Создание нового create
					3) Удаление (перемещение в корзину) del 
					4) добавление свойств addproperyy
					5) добпвление методов
					6)редактировaние
				*/
			,go (obj) { 
				tg.top = obj
				
				
/*
ВЕХА 24.1.24

*/
			} // end ,go () { 
		//base: ,
	};// end objEditor :
  
  
	let mem = memory ={
		
		aspect : {
			data : [ [ objEditor , 'proto'] ]
			/*
			- а как оределять что это встроеный объект?
			- так, а кто сюда данные записывает? это на моменте переключения происходит, а переключать пока ещё нечем
			*/

			,render () {  // это надо удалять (23.1.2024)
				let pos = data.at(-1)
				let facet = pos[0];
				let obj = pos[1];
				},// end render (){
		},// end aspect : 
			
			
		proto : { 
			
				item : {
					idm  : 123// timestamp
					, description : ' описание '
					, synonym : [ ]// опционально, и , видимо нужен метод для автоматического апдейта: самый старший из синонимов содержит все свои более юные синонимы, а они только ссылку на него
				},
				
				
				aspect : {
					idm  : 1705958344237
					, description : 'отвечает за сохранение экранного состряния доя последующего нго воспроизведния'
				},
				
				
				core : {
					idm  : 1705954799495
					, description : 'описание'
				},
				
				
				
				facet: {
				idm  : 1705711149392
				, description : 'тип объекта обеспечивающий экранное представление других объектов  специфичные свойства : <facet.go(obj): запускает отображение объекта </li><li>facet.stop() :прекращает работу, самовытирается </div>'
				},
				
				
				gui: {
					idm  : 1705954760814
					, description : '<div id="gui_desctiption"> тип core, общие методы для facet_ов</div>'
				},
				
				
				memory : {
					idm  : 1705957921913
					, description : '<div id="memory_drscription">объект который преобразуется в json и в нём хранится data. '
											+ ' вот что в него попадает, а что уже нет- хороший вопрос </div>'
					, synonym : [ ]// опционально, и , видимо нужен метод для автоматического апдейта: самый старший из синонимов содержит все свои более юные синонимы, а они только ссылку на него
				},
				
		},// end proto : {
		
	};//end mem
	
	
	const  gui = {// 22.1.24 
   /*предполагается что HTMLелементы для tg
   coдержатся в index.html (22.1.24)*/
			name : "gui"
			,idm : 1705954760814
			,tip : "core"
			,note : "общие методы для отображения представлений"
			,tg:tg
				/*	,fn  ( obj ) { // берет название объекта и пишет его в top_header
			// надобы, конечно приделать проверку объекта на соответствие
				 obj.name ? document.getElementById('top_header').innerHTML = obj.name : document.getElementById('top_header').innerHTML = obj.idm;
			}// end fn( obj ) {
				*/
				}// end tg
				
	};// end gui: {
	
	
 
		
			//пока не в gui , но вообще это метод
			
	function go ( ) {
			//let lastPosition = mem.aspect.data.at(-1)
			let facet = mem.aspect.data.at(-1)[0];
			let obj = mem.aspect.data.at(-1)[1];
			// инициатива перелается в facet
			facet.go(obj)

		//alert (facet)
		}// end function go ( ) {
	
	memory ? go() : alert("полная амнезия");
	
	

/*	if (typeof(Storage) !== "undefined") {// проверка на наличее в редакторе localStorage
			alert("Y");
			}else{
				alert( "нет хранилища");
			}// end if (typeof(Storage) else
*/


		//alert("onDOMContentLoaded");
	}//end fn onDOMContentLoaded
	
		document.addEventListener("DOMContentLoaded", onDOMContentLoaded);