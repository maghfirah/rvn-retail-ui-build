!function(){"use strict";function e(e,i){for(var r=0;r<i.length;r++){var t=i[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function i(i,r,t){return r&&e(i.prototype,r),t&&e(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function r(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkrvn_retail_ui=self.webpackChunkrvn_retail_ui||[]).push([[48],{3048:function(e,t,n){n.r(t),n.d(t,{OrderModule:function(){return H}});var l=n(8583),a=n(7957),o=n(4762),u=n(2340),s=n(8412),d=n(4162),c=n(5973),p=n(1347),g=i(function e(){r(this,e)}),m=n(1576),Z=n(7716),D=n(1689),h=n(3206),v=n(7199),T=n(6506),A=n(665),f=n(5770);function q(e,i){1&e&&(Z.TgZ(0,"div"),Z.TgZ(1,"div",2),Z._UZ(2,"div",3),Z.qZA(),Z.qZA())}function _(e,i){if(1&e&&(Z.TgZ(0,"div"),Z.TgZ(1,"span",11),Z._uU(2,"Cek bukti pesanan di "),Z.qZA(),Z.TgZ(3,"span",30),Z._uU(4),Z.qZA(),Z.qZA()),2&e){var r=Z.oxw(2);Z.xp6(4),Z.Oqu(null==r.orderDetail||null==r.orderDetail.customer?null:r.orderDetail.customer.email)}}function b(e,i){1&e&&(Z.TgZ(0,"p",39),Z._uU(1,"*This field is not valid input text"),Z.qZA())}function x(e,i){if(1&e){var r=Z.EpF();Z.TgZ(0,"div"),Z._UZ(1,"span",11),Z.TgZ(2,"form",31),Z.NdJ("ngSubmit",function(){return Z.CHM(r),Z.oxw(2).formEmail()}),Z.TgZ(3,"div",32),Z.TgZ(4,"label",33),Z._uU(5,"Silahkan masukkan email Anda jika ingin menerima bukti pesanan:"),Z.qZA(),Z.TgZ(6,"div",34),Z._UZ(7,"input",35),Z.TgZ(8,"div",36),Z.TgZ(9,"button",37),Z.NdJ("click",function(){return Z.CHM(r),Z.oxw(2).sendEmail()}),Z._uU(10,"KIRIM"),Z.qZA(),Z.qZA(),Z.qZA(),Z.YNc(11,b,2,0,"p",38),Z.qZA(),Z.qZA(),Z.qZA()}if(2&e){var t=Z.oxw(2);Z.xp6(2),Z.Q6J("formGroup",t.emailForm),Z.xp6(7),Z.Q6J("disabled",!t.emailForm.valid),Z.xp6(2),Z.Q6J("ngIf",t.emailForm.get("email").hasError("invalidEmail"))}}function U(e,i){if(1&e&&(Z.TgZ(0,"span"),Z._uU(1),Z._UZ(2,"br"),Z.TgZ(3,"span",40),Z._uU(4,"Track order anda via "),Z.TgZ(5,"a",41),Z._uU(6,"shipper.id/tracking"),Z.qZA(),Z._uU(7," untuk memantau perjalanan paket yang anda kirimkan"),Z.qZA(),Z.qZA()),2&e){var r=Z.oxw(2);Z.xp6(1),Z.hij(" Tracking Id: ",r.orderDetail.shipping.trackingId," ")}}function k(e,i){if(1&e&&(Z.TgZ(0,"span"),Z._uU(1),Z.qZA()),2&e){var r=Z.oxw(2);Z.xp6(1),Z.hij(" No. Resi: ",r.orderDetail.shipping.awbNumber," ")}}function y(e,i){1&e&&(Z.TgZ(0,"span"),Z._uU(1," Tracking Id: 5j08725 "),Z._UZ(2,"i",42),Z._UZ(3,"br"),Z.TgZ(4,"span",40),Z._uU(5,"Silahkan untuk letakkan nomor resi/tracking pada paket anda, dan bisa untuk search via "),Z.TgZ(6,"a",41),Z._uU(7,"shipper.id/tracking"),Z.qZA(),Z._uU(8," untuk memantau perjalanan paket yang anda kirimkan. Pesanan yang diproses sebelum 15.00 akan diambil paketnya pada hari tersebut, selebihnya akan diambil di esok hari."),Z.qZA(),Z.qZA())}var w=function(e,i){return{"is-finished":e,"is-active":i}};function M(e,i){if(1&e&&(Z.TgZ(0,"li",15),Z.TgZ(1,"div",16),Z.TgZ(2,"div",17),Z.TgZ(3,"b"),Z._uU(4," Pesanan Dikirim"),Z.qZA(),Z.qZA(),Z.TgZ(5,"div",18),Z._uU(6," Pesanan telah dikirim dari "),Z._UZ(7,"br"),Z._uU(8),Z.qZA(),Z.TgZ(9,"div",19),Z._uU(10),Z.ALo(11,"date"),Z.qZA(),Z.qZA(),Z.qZA()),2&e){var r=Z.oxw(2);Z.Q6J("ngClass",Z.WLB(6,w,null!==(null==r.orderDetail||null==r.orderDetail.milestones[1]?null:r.orderDetail.milestones[1].createdDate)&&null==(null==r.orderDetail||null==r.orderDetail.milestones[2]?null:r.orderDetail.milestones[2].createdDate),null!==(null==r.orderDetail||null==r.orderDetail.milestones[2]?null:r.orderDetail.milestones[2].createdDate)&&null==(null==r.orderDetail||null==r.orderDetail.milestones[3]?null:r.orderDetail.milestones[3].createdDate))),Z.xp6(8),Z.hij(" ",r.orderDetail.merchant.name," "),Z.xp6(2),Z.hij(" ",Z.xi3(11,3,null==r.orderDetail||null==r.orderDetail.milestones[2]?null:r.orderDetail.milestones[2].createdDate,"dd MMMM yyyy, HH:mm:ss")," ")}}function R(e,i){if(1&e&&(Z.TgZ(0,"li",15),Z.TgZ(1,"div",16),Z.TgZ(2,"div",17),Z.TgZ(3,"b"),Z._uU(4," Pesanan Telah Sampai di Tujuan"),Z.qZA(),Z.qZA(),Z.TgZ(5,"div",18),Z._uU(6," Pesanan akan segera diterima "),Z._UZ(7,"br"),Z._uU(8," sesuai estimasi waktu "),Z.qZA(),Z.TgZ(9,"div",19),Z._uU(10),Z.ALo(11,"date"),Z.qZA(),Z.qZA(),Z.qZA()),2&e){var r=Z.oxw(2);Z.Q6J("ngClass",Z.WLB(5,w,null!==(null==r.orderDetail||null==r.orderDetail.milestones[2]?null:r.orderDetail.milestones[2].createdDate)&&null==(null==r.orderDetail||null==r.orderDetail.milestones[3]?null:r.orderDetail.milestones[3].createdDate),null!==(null==r.orderDetail||null==r.orderDetail.milestones[3]?null:r.orderDetail.milestones[3].createdDate)&&null==(null==r.orderDetail||null==r.orderDetail.milestones[4]?null:r.orderDetail.milestones[4].createdDate))),Z.xp6(10),Z.hij(" ",Z.xi3(11,2,null==r.orderDetail||null==r.orderDetail.milestones[3]?null:r.orderDetail.milestones[3].createdDate,"dd MMMM yyyy, HH:mm:ss")," ")}}function O(e,i){if(1&e&&(Z.TgZ(0,"li",43),Z.TgZ(1,"div",16),Z.TgZ(2,"div",17),Z.TgZ(3,"b"),Z._uU(4," Pesanan Selesai"),Z.qZA(),Z.qZA(),Z.TgZ(5,"div",18),Z._uU(6," Transaksi sukses dan pembeli "),Z._UZ(7,"br"),Z._uU(8," telah menerima pesanan "),Z.qZA(),Z.TgZ(9,"div",19),Z._uU(10),Z.ALo(11,"date"),Z.qZA(),Z.qZA(),Z.qZA()),2&e){var r=Z.oxw(2);Z.xp6(10),Z.hij(" ",Z.xi3(11,1,null==r.orderDetail||null==r.orderDetail.milestones[4]?null:r.orderDetail.milestones[4].createdDate,"dd MMMM yyyy, HH:mm:ss")," ")}}function I(e,i){if(1&e&&(Z.TgZ(0,"div"),Z.TgZ(1,"div",44),Z.TgZ(2,"div",45),Z._UZ(3,"img",46),Z.qZA(),Z.TgZ(4,"div",47),Z.TgZ(5,"div",26),Z.TgZ(6,"div",6),Z.TgZ(7,"span",48),Z._uU(8),Z.qZA(),Z.TgZ(9,"h6",11),Z._uU(10),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(11,"div",26),Z.TgZ(12,"div",47),Z.TgZ(13,"h4"),Z._uU(14),Z.ALo(15,"currency"),Z.qZA(),Z.qZA(),Z.TgZ(16,"div",45),Z.TgZ(17,"span",48),Z._uU(18),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA()),2&e){var r=i.$implicit,t=Z.oxw().$implicit;Z.xp6(3),Z.Q6J("src",t.image,Z.LSH),Z.xp6(5),Z.Oqu(t.name),Z.xp6(2),Z.Oqu(r.color),Z.xp6(4),Z.Oqu(Z.gM2(15,5,r.price,"Rp ","symbol-narrow","1.0")),Z.xp6(4),Z.Oqu("x "+r.quantity)}}function E(e,i){if(1&e&&(Z.TgZ(0,"div"),Z.YNc(1,I,19,10,"div",25),Z.qZA()),2&e){var r=i.$implicit;Z.xp6(1),Z.Q6J("ngForOf",r.items)}}function N(e,i){if(1&e){var r=Z.EpF();Z.TgZ(0,"div"),Z.TgZ(1,"div",49),Z.TgZ(2,"div",6),Z.TgZ(3,"div",50),Z.TgZ(4,"div",51),Z.TgZ(5,"div",52),Z.TgZ(6,"button",53),Z.NdJ("click",function(){return Z.CHM(r),Z.oxw(2).pesananDiterima()}),Z._uU(7," PESANAN DITERIMA "),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA()}}var P=function(e){return{"is-active":e}};function C(e,i){if(1&e){var r=Z.EpF();Z.TgZ(0,"div",4),Z.TgZ(1,"div",5),Z.TgZ(2,"div",6),Z.TgZ(3,"button",7),Z.NdJ("click",function(){return Z.CHM(r),Z.oxw().detailPesanan()}),Z._UZ(4,"i",8),Z.qZA(),Z.TgZ(5,"span",9),Z._uU(6,"Detail Pesanan"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(7,"div",10),Z.TgZ(8,"div",6),Z.TgZ(9,"span",11),Z._uU(10,"Nomor Pesanan"),Z.qZA(),Z._UZ(11,"br"),Z.TgZ(12,"span"),Z.TgZ(13,"b"),Z._uU(14),Z.qZA(),Z.qZA(),Z._UZ(15,"br"),Z._UZ(16,"br"),Z.TgZ(17,"span",11),Z._uU(18,"Tanggal Pemesanan"),Z.qZA(),Z._UZ(19,"br"),Z.TgZ(20,"span"),Z.TgZ(21,"b"),Z._uU(22),Z.ALo(23,"date"),Z.qZA(),Z.qZA(),Z._UZ(24,"br"),Z._UZ(25,"br"),Z.YNc(26,_,5,1,"div",12),Z.YNc(27,x,12,3,"div",12),Z._UZ(28,"hr"),Z.qZA(),Z.qZA(),Z.TgZ(29,"div",10),Z.TgZ(30,"div",6),Z.TgZ(31,"h4"),Z._uU(32,"Alamat Pengiriman"),Z.qZA(),Z._UZ(33,"br"),Z.TgZ(34,"span"),Z.TgZ(35,"b"),Z._uU(36),Z.qZA(),Z.qZA(),Z._UZ(37,"br"),Z.TgZ(38,"span"),Z._uU(39),Z.qZA(),Z._UZ(40,"br"),Z.TgZ(41,"span"),Z._uU(42),Z.qZA(),Z._UZ(43,"hr"),Z.qZA(),Z.qZA(),Z.TgZ(44,"div",10),Z.TgZ(45,"div",6),Z.TgZ(46,"span"),Z.TgZ(47,"b"),Z._uU(48),Z.qZA(),Z.qZA(),Z.TgZ(49,"span"),Z._uU(50),Z.qZA(),Z._UZ(51,"br"),Z.YNc(52,U,8,1,"span",12),Z.YNc(53,k,2,1,"span",12),Z.YNc(54,y,9,0,"span",12),Z.qZA(),Z.qZA(),Z.TgZ(55,"div",13),Z.TgZ(56,"div",6),Z.TgZ(57,"div",14),Z.TgZ(58,"ul"),Z.TgZ(59,"li",15),Z.TgZ(60,"div",16),Z.TgZ(61,"div",17),Z.TgZ(62,"b"),Z._uU(63," Pembayaran Dikonfirmasi"),Z.qZA(),Z.qZA(),Z.TgZ(64,"div",18),Z._uU(65," Pembayaran telah dikofirmasi dan "),Z._UZ(66,"br"),Z._uU(67," akan diteruskan ke penjual "),Z.qZA(),Z.TgZ(68,"div",19),Z._uU(69),Z.ALo(70,"date"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(71,"li",15),Z.TgZ(72,"div",16),Z.TgZ(73,"div",17),Z.TgZ(74,"b"),Z._uU(75," Pesanan Diproses"),Z.qZA(),Z.qZA(),Z.TgZ(76,"div",18),Z._uU(77," Pesanan Anda sedang diproses oleh penjual "),Z.qZA(),Z.TgZ(78,"div",19),Z._uU(79),Z.ALo(80,"date"),Z.qZA(),Z.qZA(),Z.qZA(),Z.YNc(81,M,12,9,"li",20),Z.YNc(82,R,12,8,"li",20),Z.YNc(83,O,12,4,"li",21),Z.qZA(),Z.qZA(),Z._UZ(84,"hr"),Z.qZA(),Z.qZA(),Z.TgZ(85,"div",22),Z.TgZ(86,"div",6),Z._UZ(87,"img",23),Z.TgZ(88,"span",24),Z._uU(89),Z.qZA(),Z.qZA(),Z.qZA(),Z.YNc(90,E,2,1,"div",25),Z.TgZ(91,"div",13),Z.TgZ(92,"div",6),Z.TgZ(93,"div",26),Z.TgZ(94,"div",27),Z.TgZ(95,"span"),Z.TgZ(96,"b"),Z._uU(97),Z.qZA(),Z.qZA(),Z._UZ(98,"br"),Z.TgZ(99,"span"),Z.TgZ(100,"b"),Z._uU(101,"Ongkos Kirim"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(102,"div",28),Z.TgZ(103,"span"),Z.TgZ(104,"b"),Z._uU(105),Z.ALo(106,"currency"),Z.qZA(),Z.qZA(),Z._UZ(107,"br"),Z.TgZ(108,"span"),Z.TgZ(109,"b"),Z._uU(110),Z.ALo(111,"currency"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z._UZ(112,"hr"),Z.TgZ(113,"div",26),Z.TgZ(114,"div",27),Z.TgZ(115,"span"),Z.TgZ(116,"b"),Z._uU(117,"Total Pembayaran"),Z.qZA(),Z.qZA(),Z._UZ(118,"br"),Z.TgZ(119,"span"),Z.TgZ(120,"b"),Z._uU(121,"Metode Pembayaran"),Z.qZA(),Z.qZA(),Z._UZ(122,"br"),Z.TgZ(123,"span"),Z.TgZ(124,"b"),Z._uU(125,"Asuransi Pengiriman"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(126,"div",28),Z.TgZ(127,"h4",29),Z.TgZ(128,"b"),Z._uU(129),Z.ALo(130,"currency"),Z.qZA(),Z.qZA(),Z.TgZ(131,"span"),Z.TgZ(132,"b"),Z._uU(133),Z.qZA(),Z.qZA(),Z._UZ(134,"br"),Z.TgZ(135,"span"),Z.TgZ(136,"b"),Z._uU(137),Z.ALo(138,"currency"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.YNc(139,N,8,0,"div",12),Z.qZA()}if(2&e){var t=Z.oxw();Z.xp6(14),Z.Oqu(null==t.orderDetail?null:t.orderDetail.invoiceNumber),Z.xp6(8),Z.Oqu(Z.xi3(23,29,null==t.orderDetail?null:t.orderDetail.createdDate,"dd MMMM yyyy, HH:mm:ss z")),Z.xp6(4),Z.Q6J("ngIf",""!==(null==t.orderDetail||null==t.orderDetail.customer?null:t.orderDetail.customer.email)),Z.xp6(1),Z.Q6J("ngIf",""===(null==t.orderDetail||null==t.orderDetail.customer?null:t.orderDetail.customer.email)),Z.xp6(9),Z.Oqu(null==t.orderDetail||null==t.orderDetail.customer?null:t.orderDetail.customer.name),Z.xp6(3),Z.Oqu(null==t.orderDetail||null==t.orderDetail.customer?null:t.orderDetail.customer.phoneNumber),Z.xp6(3),Z.Oqu(null==t.orderDetail||null==t.orderDetail.customer?null:t.orderDetail.customer.detailAddress),Z.xp6(6),Z.Oqu((null==t.orderDetail||null==t.orderDetail.shipping?null:t.orderDetail.shipping.name)+" - "+(null==t.orderDetail||null==t.orderDetail.shipping?null:t.orderDetail.shipping.rateName)),Z.xp6(2),Z.hij(" (Akan diterima pada ",t.addDate(1,3,t.orderDetail.createdDate),")"),Z.xp6(2),Z.Q6J("ngIf",null!=(null==t.orderDetail||null==t.orderDetail.milestones[2]?null:t.orderDetail.milestones[2].createdDate)&&""!=(null==t.orderDetail||null==t.orderDetail.shipping?null:t.orderDetail.shipping.trackingId)&&null!=(null==t.orderDetail||null==t.orderDetail.shipping?null:t.orderDetail.shipping.trackingId)&&(""==(null==t.orderDetail||null==t.orderDetail.shipping?null:t.orderDetail.shipping.awbNumber)||null==(null==t.orderDetail||null==t.orderDetail.shipping?null:t.orderDetail.shipping.awbNumber))),Z.xp6(1),Z.Q6J("ngIf",null!=(null==t.orderDetail||null==t.orderDetail.milestones[2]?null:t.orderDetail.milestones[2].createdDate)&&""!=(null==t.orderDetail||null==t.orderDetail.shipping?null:t.orderDetail.shipping.awbNumber)&&null!=(null==t.orderDetail||null==t.orderDetail.shipping?null:t.orderDetail.shipping.awbNumber)),Z.xp6(1),Z.Q6J("ngIf",!(null==(null==t.orderDetail||null==t.orderDetail.milestones[2]?null:t.orderDetail.milestones[2].createdDate)||""!=(null==t.orderDetail||null==t.orderDetail.shipping?null:t.orderDetail.shipping.trackingId)&&null!=(null==t.orderDetail||null==t.orderDetail.shipping?null:t.orderDetail.shipping.trackingId)||""!=(null==t.orderDetail||null==t.orderDetail.shipping?null:t.orderDetail.shipping.awbNumber)&&null!=(null==t.orderDetail||null==t.orderDetail.shipping?null:t.orderDetail.shipping.awbNumber)||0!=(null==t.orderDetail||null==t.orderDetail.shipping?null:t.orderDetail.shipping.digitalGoods)||t.envUrl===t.envSimulatorNotExist)),Z.xp6(5),Z.Q6J("ngClass",Z.VKq(58,P,null!==(null==t.orderDetail||null==t.orderDetail.milestones[0]?null:t.orderDetail.milestones[0].createdDate)&&null==(null==t.orderDetail||null==t.orderDetail.milestones[1]?null:t.orderDetail.milestones[1].createdDate))),Z.xp6(10),Z.hij(" ",Z.xi3(70,32,null==t.orderDetail||null==t.orderDetail.milestones[0]?null:t.orderDetail.milestones[0].createdDate,"dd MMMM yyyy, HH:mm:ss")," "),Z.xp6(2),Z.Q6J("ngClass",Z.WLB(60,w,null!==(null==t.orderDetail||null==t.orderDetail.milestones[0]?null:t.orderDetail.milestones[0].createdDate)&&null==(null==t.orderDetail||null==t.orderDetail.milestones[1]?null:t.orderDetail.milestones[1].createdDate),null!==(null==t.orderDetail||null==t.orderDetail.milestones[1]?null:t.orderDetail.milestones[1].createdDate)&&null==(null==t.orderDetail||null==t.orderDetail.milestones[2]?null:t.orderDetail.milestones[2].createdDate))),Z.xp6(8),Z.hij(" ",Z.xi3(80,35,null==t.orderDetail||null==t.orderDetail.milestones[1]?null:t.orderDetail.milestones[1].createdDate,"dd MMMM yyyy, HH:mm:ss")," "),Z.xp6(2),Z.Q6J("ngIf",null!=(null==t.orderDetail||null==t.orderDetail.milestones[0]?null:t.orderDetail.milestones[0].createdDate)&&null!=(null==t.orderDetail||null==t.orderDetail.milestones[1]?null:t.orderDetail.milestones[1].createdDate)),Z.xp6(1),Z.Q6J("ngIf",null!=(null==t.orderDetail||null==t.orderDetail.milestones[1]?null:t.orderDetail.milestones[1].createdDate)&&null!=(null==t.orderDetail||null==t.orderDetail.milestones[2]?null:t.orderDetail.milestones[2].createdDate)),Z.xp6(1),Z.Q6J("ngIf",null!=(null==t.orderDetail||null==t.orderDetail.milestones[2]?null:t.orderDetail.milestones[2].createdDate)&&null!=(null==t.orderDetail||null==t.orderDetail.milestones[3]?null:t.orderDetail.milestones[3].createdDate)),Z.xp6(4),Z.Q6J("src",null==t.orderDetail||null==t.orderDetail.merchant?null:t.orderDetail.merchant.image,Z.LSH),Z.xp6(2),Z.Oqu(null==t.orderDetail||null==t.orderDetail.merchant?null:t.orderDetail.merchant.name),Z.xp6(1),Z.Q6J("ngForOf",t.orderDetail.products),Z.xp6(7),Z.hij("Total Harga (",t.totalProduct," Produk)"),Z.xp6(8),Z.Oqu(Z.gM2(106,38,t.orderDetail.payment.itemsPrice,"Rp ","symbol-narrow","1.0")),Z.xp6(5),Z.Oqu(Z.gM2(111,43,t.orderDetail.payment.shippingPrice,"Rp ","symbol-narrow","1.0")),Z.xp6(19),Z.Oqu(Z.gM2(130,48,t.orderDetail.payment.amount,"Rp ","symbol-narrow","1.0")),Z.xp6(4),Z.Oqu(t.orderDetail.payment.channel),Z.xp6(4),Z.Oqu(Z.gM2(138,53,t.orderDetail.payment.insurancePrice,"Rp ","symbol-narrow","1.0")),Z.xp6(2),Z.Q6J("ngIf",null!=(null==t.orderDetail||null==t.orderDetail.milestones[3]?null:t.orderDetail.milestones[3].createdDate)&&null==(null==t.orderDetail||null==t.orderDetail.milestones[4]?null:t.orderDetail.milestones[4].createdDate))}}var S,L=[{path:"",component:(S=function(){function e(i,t,n,l,a,o){r(this,e),this.activatedRoute=i,this.requestService=t,this.apiModelTranslatorService=n,this.errorService=l,this.alertService=a,this.formBuilder=o,this.loading=!0,this.orderDetail=new c.dn,this.envUrl=u.N.envUrl,this.envSimulatorNotExist=m.q.ENV_SIMULATOR_NOT_EXIST,this.totalProduct=0}return i(e,[{key:"ngOnInit",value:function(){return(0,o.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.activatedRoute.params.subscribe(function(e){i.uiIdInvoice=e.uiIdInvoice,i.businessName=e.businessName});case 2:return e.next=4,this.initLoad();case 4:this.formEmail();case 5:case"end":return e.stop()}},e,this)}))}},{key:"initLoad",value:function(){return(0,o.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.checkOrder();case 2:case"end":return e.stop()}},e,this)}))}},{key:"formEmail",value:function(){this.emailForm=this.formBuilder.group({email:[null,[p.T.emailValidator]]})}},{key:"checkOrder",value:function(){return(0,o.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var i,r,t,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.N.apiUrl+s.b.ORDER,(r=new Map).set("uiId",this.uiIdInvoice),e.next=4,this.requestService.get(i,r).toPromise().then(function(e){return n.apiModelTranslatorService.snakeToCamelCase(e)},function(e){n.errorService.getErrorApi(e)});case 4:if((t=e.sent).paymentStatus!==d.b.Paid){e.next=11;break}return this.loading=!1,e.next=9,this.getDetailOrder();case 9:e.next=12;break;case 11:""!==t.redirectUrl||null!==t.redirectUrl?window.location.href=t.redirectUrl:this.alertService.setProps("Mohon maaf terjadi kesalahan, mohon coba kembali",!0);case 12:case"end":return e.stop()}},e,this)}))}},{key:"getDetailOrder",value:function(){return(0,o.mG)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var i,r,t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.N.apiUrl+s.b.ORDER_DETAIL,(r=new Map).set("uiId",this.uiIdInvoice),e.next=4,this.requestService.get(i,r).toPromise().then(function(e){return t.orderDetail=t.apiModelTranslatorService.snakeToCamelCase(e),t.orderDetail.milestones=t.orderDetail.milestones.sort(function(e,i){return e.order-i.order}),t.totalProduct=t.orderDetail.products.reduce(function(e,i){return e+i.items.reduce(function(e,i){return e+i.quantity},0)},0),t.orderDetail},function(e){t.errorService.getErrorApi(e)});case 4:case"end":return e.stop()}},e,this)}))}},{key:"detailPesanan",value:function(){}},{key:"addDate",value:function(e,i,r){var t,n="MMMM",a="id",o=(t=void 0===r?new Date:new Date(r)).setDate(t.getDate()+e),u=t.setDate(t.getDate()+i),s=(0,l.p6)(o,"dd",a),d=(0,l.p6)(u,"dd",a),c=(0,l.p6)(o,n,a),p=(0,l.p6)(o,n,a);return c===p?s+" - "+d+" "+p:s+" "+c+" - "+d+" "+p}},{key:"fileProgress",value:function(e,i){this.fileData=e.target.files[0],void 0!==this.fileData&&this.preview(i)}},{key:"preview",value:function(e){var i,r=this;if(null!==(null===(i=this.fileData)||void 0===i?void 0:i.type).match("image.*"))if(this.fileData.size>1e6)this.alertService.setProps("Size more than 1 MB",!0);else{var t=new FileReader;t.readAsDataURL(this.fileData),t.onload=function(e){var i=new Image;i.src=t.result,i.onload=function(){i.naturalHeight<300||i.naturalWidth<300?r.alertService.setProps("Minimum width and height 300",!0):(r.previewImageProduct1=t.result,r.imageToUpload1=r.fileData)}}}else this.alertService.setProps("Failed Upload Type",!0)}},{key:"pesananDiterima",value:function(){var e=this;this.loading=!0;var i=u.N.apiUrl+s.b.ORDER_COMPLETE,r=new Map;r.set("uiId",this.uiIdInvoice),this.requestService.post(i,r,null).toPromise().then(function(i){return(0,o.mG)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getDetailOrder();case 2:this.loading=!1;case 3:case"end":return e.stop()}},e,this)}))},function(i){e.errorService.getErrorApi(i)})}},{key:"sendEmail",value:function(){var e=this;if(this.emailForm.valid){this.loading=!0;var i=u.N.apiUrl+s.b.ORDER_SEND_EMAIL,r=new g;r.email=this.emailForm.get("email").value,r.uiId=this.uiIdInvoice,this.requestService.post(i,null,this.apiModelTranslatorService.camelToSnakeCase(r)).toPromise().then(function(i){return(0,o.mG)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.loading=!1;case 1:case"end":return e.stop()}},e,this)}))},function(i){e.errorService.getErrorApi(i)})}}}]),e}(),S.\u0275fac=function(e){return new(e||S)(Z.Y36(a.gz),Z.Y36(D.s),Z.Y36(h.g),Z.Y36(v.T),Z.Y36(T.c),Z.Y36(A.qu))},S.\u0275cmp=Z.Xpm({type:S,selectors:[["app-order-detail"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loaded",""],[1,"center"],["role","status",1,"spinner-border","text-primary","spinner-sm","mr-5"],[1,"container-mobile"],[1,"row","pt-3"],[1,"col-12"],["id","backButton","type","button",1,"btn",3,"click"],[1,"fas","fa-arrow-left"],[2,"font-size","16px","font-weight","bold"],[1,"row","pl-3","pr-3"],[1,"text-muted"],[4,"ngIf"],[1,"row","p-3"],[1,"timeline","timeline-vertical","timeline-progress","timeline-primary"],[3,"ngClass"],[1,"description"],[1,"desc_title"],[1,"desc_content"],[1,"desc_time",2,"width","160px"],[3,"ngClass",4,"ngIf"],["class","is-finished",4,"ngIf"],[1,"row","pl-3","pr-3","mb-3"],[2,"height","24px","width","24px","border-radius","50%",3,"src"],[1,"ml-3",2,"font-size","16px","font-weight","bold"],[4,"ngFor","ngForOf"],[1,"row"],[1,"col-6"],[1,"col-6","text-right"],[1,"text-success"],[1,"font-weight-bold"],["id","emailForm",1,"pt-10",3,"formGroup","ngSubmit"],[1,"form-group"],["for","email"],[1,"input-group"],["type","text","id","email","formControlName","email","placeholder","name@email.com",1,"form-control","dk-text-input"],[1,"input-group-append"],["type","button","id","submitEmail",1,"btn","btn-primary","dk-btn-group",3,"disabled","click"],["class","text-danger",4,"ngIf"],[1,"text-danger"],[2,"text-align","justify","display","block"],["href","https://shipper.id/tracking"],["ngbTooltip","Tracking Id Simulasi",1,"fas","fa-info-circle","text-primary","ml-2"],[1,"is-finished"],[1,"row","mb-2","px-3"],[1,"col-2"],[2,"height","64px","width","100%",3,"src"],[1,"col-10"],[2,"font-size","16px"],[1,"row","mt-4"],[1,"bottom-card"],[1,"row","px-3"],[1,"col-12","mt-3"],["id","pesananDiterima","type","button",1,"btn","btn-primary",2,"width","100%",3,"click"]],template:function(e,i){if(1&e&&(Z.YNc(0,q,3,0,"div",0),Z.YNc(1,C,140,63,"ng-template",null,1,Z.W1O)),2&e){var r=Z.MAs(2);Z.Q6J("ngIf",i.loading)("ngIfElse",r)}},directives:[l.O5,l.mk,l.sg,A._Y,A.JL,A.sg,A.Fj,A.JJ,A.u,f._L],pipes:[l.uU,l.H9],styles:[".center[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:fixed;top:0;bottom:0;left:0;right:0;margin:auto}.container-mobile[_ngcontent-%COMP%]{min-width:360px;max-width:600px;margin:-24px auto -45px;background-color:#fff;min-height:100vh;position:relative}@media (max-width: 768px){.container-mobile[_ngcontent-%COMP%]{margin:-24px -24px -45px}}img.image-container[_ngcontent-%COMP%]{width:110px;height:110px;-o-object-fit:contain;object-fit:contain}.responsive-layout[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.responsive-layout[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:first-child, .responsive-layout[_ngcontent-%COMP%]{margin-right:16px}@media (max-width: 768px){.responsive-layout[_ngcontent-%COMP%]{display:block}.responsive-layout[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%], .responsive-layout[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:8px}}.bottom-card[_ngcontent-%COMP%]{box-shadow:0 -2px 10px rgba(0,0,0,.1);border-radius:16px 16px 0 0;margin:0;padding-top:24px;padding-bottom:32px}"]}),S),pathMatch:"full"}],H=function(){var e=i(function e(){r(this,e)});return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=Z.oAB({type:e}),e.\u0275inj=Z.cJS({imports:[[l.ez,a.Bz.forChild(L),A.UX,A.u5,f.HK]]}),e}()},8412:function(e,t,n){n.d(t,{b:function(){return a}});var l,a=((l=i(function e(){r(this,e)})).PRODUCT="/product",l.PRODUCT_CATEGORY="/product/category",l.PRODUCT_ACTIVATE="/active",l.PRODUCT_DETAIL="/detail",l.PRODUCT_IMAGES="/image",l.PRODUCT_VARIANT="/product/variant",l.MERCHANT="/merchant",l.MERCHANT_IMAGE="/image",l.MERCHANT_LINK="/merchant/link",l.MERCHANT_ORDER="/merchant/order",l.MERCHANT_DASHBOARD="/merchant/dashboard",l.MERCHANT_ORDER_DETAIL="/detail",l.MERCHANT_ORDER_PROCESS="/process",l.MERCHANT_ORDER_SEND="/send",l.LOCATION="/location",l.LINK="/link",l.LINK_MERCHANT_DETAIL="/detail",l.LINK_MERCHANT_PRODUCTS="/products",l.LINK_MERCHANT_CATEGORY="/category",l.CART="/cart",l.SHIPPING="/shipping",l.CHECKOUT="/checkout",l.ORDER="/order",l.ORDER_DETAIL="/order/detail",l.ORDER_COMPLETE="/order/complete",l.ORDER_SEND_EMAIL="/order/email/send",l.INTERNAL="/internal",l.INTERNAL_LIST="/internal/product",l.INTERNAL_VALIDATE="/validate",l.INTERNAL_CATEGORY="/category",l)}}])}();