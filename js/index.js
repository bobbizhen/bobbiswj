$(function(){
	$(function(){
		var owl =$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
		    nav:false,
			items:1,
			autoplay:true,
			autoplayTimeout:5000,
			autoplayHoverPause:true
		});
		owl.on('changed.owl.carousel', function(event) {
			$('.owl-carousel .item').find('h4').removeClass('animated bounceInLeft');
			$('.owl-carousel .item').eq(event.item.index).find('h4').addClass('animated bounceInLeft');
			$('.owl-carousel .item').find('h5').removeClass('animated bounceInUp');
			$('.owl-carousel .item').eq(event.item.index).find('h5').addClass('animated bounceInUp');
	});
	// $('.owl-carousel .item').height($(window).height()-80);
	$(window).scroll(function(e){
		if($(document).scrollTop()>80){
			$(".header").css('top','80px').css('marginTop','-80px');
			$(".header").addClass('headerfixed');
		} else {
			$(".header").css('top',$(document).scrollTop()).css('marginTop','0px');
			$(".header").removeClass('headerfixed');
		};
		// console.log($('.bar').offset().top-$(window).height(),$(document).scrollTop());
		
	})
	
	$(window).scroll(function(e){
			var y1 = $('.chbar').offset().top-$(window).height();
			var y2 = $(document).scrollTop();
			if( y1<y2 ) {
				console.log($('.chbar').width());
				$('.chbar').width(550-y2+y1);
			}
		
	})
	
// 数字动画效果
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		})
	})
	
	//nav导航
	// $('.navbar-nav')
})

$(function(){
	
	
var vm = new Vue({
	el:'#app',
	data:{
		navList:[
			{
				name:'首页',
				link:'#home'
			},
			{
				name:'我们可以做',
				link:'#wecan'
			},
			{
				name:'我们适合谁',
				link:'#foryou'
			},
			{
				name:'行业案例',
				link:'#case'
			},
			{
				name:'合作方式',
				link:'#cooperation'
			},
			{
				name:'联系我们',
				link:'#connectus'
			}
		],
		imgurl:'img/',
		mylist01:[{
			url:'img/pic01.png',
			title:'图片处理',
			params:'w1',
			content:[
				'分辨率调整',
				'修图抠图',
				'修改文字',
				'尺寸调整',
				'替换背景',
				'格式转换',
				'电子图章',
				'证件照处理',]
		},
		{
			url:'img/pic02.png',
			title:'网页设计·文字排版',
			params:'w2',
			content:[
				'网站设计',
				'banner设计',
				'宣传彩页',
				'手册设计',
				'企业名片',
				'邀请函件',
				'表格定制',
				'LOGO图标',]
		},
		{
			url:'img/pic03.png',
			title:'网站制作·原型DEMO',
			params:'w3',
			content:[
				'高保真原型',
				'产品UI设计',
				'产品交互动画',
				'DEMO制作',
				'HTML+CSS+JS',
				'Jquery/Bootstrap/Vue',
				'Echarts/Kendo',
				'PS/Sketch/Principle',]
		}],
		numlist:[
			{
				title:'累积业务',
				count:'135',
				unit:'项'
			},
			{
				title:'累计营业额',
				count:'388,900',
				unit:'元'
			},
			{
				title:'用户访问量',
				count:'2,350',
				unit:'人次'
			},
			{
				title:'累计客户',
				count:'12',
				unit:'个'
			}
		],
		cooplist:[
			{
				name:'计件方式',
				detail:'按工作数量和预先规定的单价，来计算报酬的方式,适合工作内容单一,数量可衡量的工作内容,例如统一修改图片格式、图片修改文字（每字）等。',
				url:'img/coop01.png'
			},
			{
				name:'计时方式',
				detail:'按照工作时间和每小时单价来计算报酬。每日记录工作内容，定期反馈工作成果。适合工作量预估在几周到几个月完成。',
				url:'img/coop02.png'
			},
			{
				name:'包月方式',
				detail:'有长期合作需求，定期会有相对固定的工作量任务，报酬按月薪计算。',
				url:'img/coop03.png'
			},
			{
				name:'其他方式',
				detail:'根据客户意见，协商的其他合作方式。',
				url:'img/coop04.png'
			}
		],
		caseList:[
			{
				name:'房地产',
				icon:'fangdichanjianzhu',
				params:'c1',
			},
			{
				name:'能源',
				icon:'nengyuan',
				params:'c2',
			},
			{
				name:'银行',
				icon:'yinhang1',
				params:'c3',
			},
			{
				name:'政府',
				icon:'zhengfu2',
				params:'c4',
			},
			{
				name:'电商',
				icon:'dianshang1',
				params:'c5',
			},
			{
				name:'教育',
				icon:'jiaoyu-',
				params:'c6',
			},
			
		],
	},
	computed:{
		videoList(){
			let arr = [1,2,3,4];
			let vlist = this.getRandomArrayElements(arr, 3);
			let oldarr = [...this.mylist01];
			oldarr.forEach((item,index)=>{
				item.video = 'img/v0'+vlist[index]+'.mp4';
			})
			return oldarr
		}
	},
	mounted(){
	},
	methods:{
		goTo(param){
			window.open('imgsee.html?p='+param);
		},
		//随机取数
		getRandomArrayElements(arr, count) {
		    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
		    while (i-- > min) {
		        index = Math.floor((i + 1) * Math.random());
		        temp = shuffled[index];
		        shuffled[index] = shuffled[i];
		        shuffled[i] = temp;
		    }
		    return shuffled.slice(min);
		},
	}
})
})