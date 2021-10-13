(function (blink) {
	'use strict';

	var khalamosStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	khalamosStyle.prototype = {
		//BK-15873 añadimos el estilo basic como parent para la herencia de los estilos del CKEditor
		parent: blink.theme.styles.basic.prototype,
		bodyClassName: 'content_type_clase_khalamos',
		ckEditorStyles: {
			name: 'khalamos',
			styles: [

				{ name: 'Título 01', element: 'h4', attributes: { 'class': 'bck-title bck-title1'} },
				{ name: 'Título 02', element: 'h4', attributes: { 'class': 'bck-title bck-title2'} },
				{ name: 'Título 03', element: 'h4', attributes: { 'class': 'bck-title bck-title3'} },
				{ name: 'Título 04', element: 'h4', attributes: { 'class': 'bck-title bck-title4'} },
				{ name: 'Título 05', element: 'h4', attributes: { 'class': 'bck-title bck-title5'} },
				{ name: 'Título 06', element: 'h4', attributes: { 'class': 'bck-title bck-title6'} },
				{ name: 'Título 07', element: 'h4', attributes: { 'class': 'bck-title bck-title7'} },
				{ name: 'Título 08', element: 'h4', attributes: { 'class': 'bck-title bck-title8'} },
				{ name: 'Título 09', element: 'h4', attributes: { 'class': 'bck-title bck-title9'} },
				{ name: 'Título 10', element: 'h4', attributes: { 'class': 'bck-title bck-title10'} },
				{ name: 'Título 11', element: 'h4', attributes: { 'class': 'bck-title bck-title11'} },
				{ name: 'Título 12', element: 'h4', attributes: { 'class': 'bck-title bck-title12'} },
				{ name: 'Título 13', element: 'h4', attributes: { 'class': 'bck-title bck-title13'} },
				{ name: 'Título 14', element: 'h4', attributes: { 'class': 'bck-title bck-title14'} },
				{ name: 'Título 15', element: 'h4', attributes: { 'class': 'bck-title bck-title15'} },
				{ name: 'Título 16', element: 'h4', attributes: { 'class': 'bck-title bck-title16'} },
				{ name: 'Título 17', element: 'h4', attributes: { 'class': 'bck-title bck-title17'} },
				{ name: 'Título 18', element: 'h4', attributes: { 'class': 'bck-title bck-title18'} },
				{ name: 'Título 19', element: 'h4', attributes: { 'class': 'bck-title bck-title19'} },
				{ name: 'Título 20', element: 'h4', attributes: { 'class': 'bck-title bck-title20'} },
				{ name: 'Título 21', element: 'h4', attributes: { 'class': 'bck-title bck-title21'} },
				{ name: 'Título 22', element: 'h4', attributes: { 'class': 'bck-title bck-title22'} },
				{ name: 'Título 23', element: 'h4', attributes: { 'class': 'bck-title bck-title23'} },
				{ name: 'Título 24', element: 'h4', attributes: { 'class': 'bck-title bck-title24'} },
				{ name: 'Título 25', element: 'h4', attributes: { 'class': 'bck-title bck-title25'} },
				{ name: 'Título 26', element: 'h4', attributes: { 'class': 'bck-title bck-title26'} },

				{ name: 'Énfasis 1', element: 'span', attributes: { 'class': 'bck-enfasis-1'} },
				{ name: 'Énfasis 2', element: 'span', attributes: { 'class': 'bck-enfasis-2'} },
				{ name: 'Énfasis 3', element: 'span', attributes: { 'class': 'bck-enfasis-3'} },
				{ name: 'Énfasis 4', element: 'span', attributes: { 'class': 'bck-enfasis-4'} },
				{ name: 'Énfasis 5', element: 'span', attributes: { 'class': 'bck-enfasis-5'} },
				{ name: 'Énfasis 6', element: 'span', attributes: { 'class': 'bck-enfasis-6'} },
				{ name: 'Énfasis 7', element: 'span', attributes: { 'class': 'bck-enfasis-7'} },	

				{ name: 'Lista ordenada 1', element: 'ol', attributes: { 'class': 'bck-ol bck-ol1' } },
				{ name: 'Lista ordenada 2', element: 'ol', attributes: { 'class': 'bck-ol bck-ol2' } },
				{ name: 'Lista ordenada 3', element: 'ol', attributes: { 'class': 'bck-ol bck-ol3' } },
				{ name: 'Lista ordenada 4', element: 'ol', attributes: { 'class': 'bck-ol bck-ol4' } },
				{ name: 'Lista ordenada 5', element: 'ol', attributes: { 'class': 'bck-ol bck-ol5' } },

				{ name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box1' } },
				{ name: 'Caja 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box2' } },
				{ name: 'Caja 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box3' } },
				{ name: 'Caja 4', type: 'widget', widget: 'blink_box', attributes: { 'class': 'bck-box bck-box4' } },

				{ name: 'Celda 1', element: 'td', attributes: { 'class': 'bck-td-1'} },
            	{ name: 'Celda 2', element: 'td', attributes: { 'class': 'bck-td-2'} },
            	{ name: 'Celda 3', element: 'td', attributes: { 'class': 'bck-td-3'} },
            	{ name: 'Celda 4', element: 'td', attributes: { 'class': 'bck-td-4'} },
            	{ name: 'Celda 5', element: 'td', attributes: { 'class': 'bck-td-5'} },
            	{ name: 'Celda 6', element: 'td', attributes: { 'class': 'bck-td-6'} },
            	{ name: 'Celda 7', element: 'td', attributes: { 'class': 'bck-td-7'} },
            	{ name: 'Celda 8', element: 'td', attributes: { 'class': 'bck-td-8'} },
			]
		},

		init: function (scope) {
			var that = scope || this;
			//BK-15873 Utilizamos this.parent declarada al inicio de la clase
			this.parent.init.call(that);
			that.addActivityTitle();
			if(window.esWeb) return;
			that.removeFinalSlide();
			that.handleScrollEnd();
			that.setTooltip();
			window.editar && that.configEditor();

			if ($('.navbar-bottom').length > 0) {
 				$('.navbar-bottom ol').wrapAll('<div id="bottom-navigator"></div>');
		 		var width = 0;
		 		$('.navbar-bottom li').each(function(i, elem){ width += $(elem).outerWidth(true); });
		 		$('.navbar-bottom ol').css('width', width * 1.1);
		 		var scroll = new IScroll('#bottom-navigator', {
		 			scrollX: true,
		 			scrollY: false,
		 			eventPassthrough: true
		 		});
		 		scroll.on('scrollEnd', that.handleScrollEnd);
		 		that.handleScrollEnd.call(scroll);
	 		}

		},

		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
		},


		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return $(this).html().trim() + ' > ' + blink.courseInfo.unit;
			});
		},

		handleScrollEnd: function () {
 			$('#bottom-navigator')
 				.removeClass('show_left')
 				.removeClass('show_right');

 			if (this.x < 0) {
 				$('#bottom-navigator').addClass('show_left');
 			}
 			if (this.x > this.maxScrollX) {
 				$('#bottom-navigator').addClass('show_right');
 			}

 		},

		setTooltip: function () {},

		//BK-15873 Quitamos la funcion getEditorStyles para que la herede de basic
	};

	khalamosStyle.prototype = _.extend({}, new blink.theme.styles.basic(), khalamosStyle.prototype);

	blink.theme.styles.khalamos = khalamosStyle;

})( blink );
