
var bancoClientes=[];

//objeto Produto
function Produto(codigo,nome,foto,descricao,preco,peso,quantidade,precoFinal){
	this.codigo = codigo;
	this.nome = nome;
	this.foto= foto;
	this.descricao= descricao;
	this.preco= preco;
	this.peso = peso;	
	this.quantidade= quantidade;
	this.precoFinal= precoFinal;
}

//objeto Carrinho
function Carrinho(dono){
	this.dono = dono;
	this.listProdutos =[];

	
}

//acha a posição do cliente no banco de clientes
function posicaoBanco(nome){
	var contador= 0;
	while(contador < bancoClientes.length){
		if (nome === bancoClientes[contador].dono) {
			return contador;
		}

	contador ++;
	}
	return -1;
}

//onde o cliente se identifica , caso não tenha cadastro ele é cadastrado automaticamente
function clicEntrar(){
	var valorCompra =  0;
	var quantidadeDeItem= 0;

	var user=document.getElementsByName('botaoEntrar')[0].value;
		if(user == ""){
			alert("campo Nome não preechido");

		}else{

	document.getElementById('entrarUser').innerHTML = "Olá, "+user;
	var nome = posicaoBanco(user);



	if(nome === -1){
		alert(user +" Cadastrado com sucesso");

	}else{
	}



	if (bancoClientes.length===0) {

	}else{
		if (nome ===-1) {

		}else{
			for (var i = document.getElementById('tableCarrinho').rows.length; i > 1; i--) {
					apagaLinha(i-1);
		}
			
		for (var i = 0; i < bancoClientes[nome].listProdutos.length; i++) {
			inserirCarrinho(bancoClientes[nome].listProdutos[i]);
			valorCompra+=bancoClientes[nome].listProdutos[i].precoFinal;
			quantidadeDeItem+=bancoClientes[nome].listProdutos[i].quantidade;
			document.getElementById('valTotal').innerHTML= "Valor Total Da compra "+valorCompra;
			document.getElementById('iconeCar').text = quantidadeDeItem;

		}
}
}

		$(document).ready(function(){
			$('#entrar').hide();
			$('#detalhe').show();
		});
		}
}


//array de produtos
var produtos = [];
produtos[0]= new Produto("cod01","Batata Dia",'<img src="Produtos/1.jpg"  class="img-responsive" >',"batata frita",3,100,0,0);
produtos[1]= new Produto("cod02","Bombom Nestle",'<img src="Produtos/2.jpg" class="img-responsive"  >',"caixa bombom",9,350,0,0);
produtos[2]= new Produto("cod03","Café 3 corações",'<img src="Produtos/3.jpg" class="img-responsive"  >',"cafe forte",4,500,0,0);
produtos[3]= new Produto("cod04","Barra Lacta",'<img src="Produtos/4.jpg" class="img-responsive"  >',"barra ao leite",6,150,0,0);
produtos[4]= new Produto("cod05","Leite Ninho",'<img src="Produtos/5.jpg" class="img-responsive"  >',"leite em pó",10,400,0,0);
produtos[5]= new Produto("cod06","marshmallow fini",'<img src="Produtos/6.jpg" class="img-responsive"  >',"tipo torção",5,100,0,0);
produtos[6]= new Produto("cod07","M&m's",'<img src="Produtos/7.jpg" class="img-responsive"  >',"mm's amendoim",4,200,0,0);
produtos[7]= new Produto("cod08","Biscoito Oreo",'<img src="Produtos/8.jpg" class="img-responsive"  >',"Sabor morango",3,150,0,0);
produtos[8]= new Produto("cod09","Pizza Sadia",'<img src="Produtos/9.jpg" class="img-responsive"  >',"pizza mussarela",8,700,0,0);
produtos[9]= new Produto("cod010","Barra snickers",'<img src="Produtos/10.jpg" class="img-responsive"  >',"barra chocolate",3,100,0,0);
produtos[10]= new Produto("cod11","Toddy",'<img src="Produtos/11.jpg" class="img-responsive"  >',"achocolatado",7,400,0,0);
produtos[11]= new Produto("cod12","Tubes fini",'<img src="Produtos/12.jpg" class="img-responsive"  >',"tubes morango",4,100,0,0);



//insere o produto no carrinho
function inserirCarrinho(produto){

	var tabela = document.getElementById("tableCarrinho");
	var row = tabela.insertRow();
	row.insertCell().innerHTML = produto.foto;
	row.insertCell().innerHTML = produto.nome;
	row.insertCell().innerHTML = produto.quantidade;
	row.insertCell().innerHTML = produto.precoFinal;

}


//caso o clinte tenha clicado no produto mas não deseja compra ele pode voltar a pagina principal
function voltaPagina(){
	$(document).ready(function(){
	$('#container').show();
	$('#detalhe').hide();

	});
}

//apaga uma linha tabela , é usada pra carregar o carinho apagando o carrinho anterior
function apagaLinha(num){
	document.getElementById("tableCarrinho").deleteRow(num);
    
}

//Função que adiciona ao carrinho o pruduto desejado e sua especificações
//recebe o valor do botão que é o mesmo da posição do produto no array de produtos e adiciona no tipo carrinho
function addCarinho(value){
	var posicao=  parseInt(value.name);
	var qtd= document.getElementsByName('cardQtd'+posicao)[0].value;
	var valorCompra =0;
	var quantidadeDeItem = 0;
	
//se o campo entrar não tem usuario especifico , ai ele pede pra o usuario se logar 
	if(document.getElementById('entrarUser').innerHTML =="Entrar"){
		alert("Nenhum Usuário Identificado!Identifique-se!");
		$(document).ready(function(){
		$('#detalhe').hide();
		$('#entrar').show();
	});

	}else{
//se estiver logado ele vai exibir o nome no botão entrar 		
		var user=document.getElementsByName('botaoEntrar')[0].value;
		document.getElementById('entrarUser').innerHTML = "Olá,"+user;

//se o vetor banco de clientes estiver vazio ele adiciona o cliente e seus produtos na primeira posição do vetor
	if (bancoClientes.length === 0) {
		bancoClientes[0] = new Carrinho(user);
		bancoClientes[0].listProdutos.push(produtos[posicao]);
		bancoClientes[0].listProdutos[0].quantidade=parseInt(qtd);
		bancoClientes[0].listProdutos[0].precoFinal=(bancoClientes[0].listProdutos[0].preco * qtd)*(12.5*(bancoClientes[0].listProdutos[0].peso/1000));

		$(document).ready(function(){
			$('#detalhe').hide();
			$('#entrar').hide();
			$('#carrinho').hide();
			$('#container').show();
		});

		inserirCarrinho(bancoClientes[0].listProdutos[0]);
			
		valorCompra+=bancoClientes[0].listProdutos[0].precoFinal;
		quantidadeDeItem+=bancoClientes[0].listProdutos[0].quantidade;

		document.getElementById('valTotal').innerHTML= "Valor Total Da compra "+valorCompra;
		document.getElementById('iconeCar').text = quantidadeDeItem;

	}else{
//se não estiver vazio ele vai procurar a posição daquele nome no vetor		
		var nomeNoBanco = posicaoBanco(user);
//se retoranar -1 é um novo usuario , add um carrinho pra ele e seus produtos
		if (nomeNoBanco === -1) {

			bancoClientes[bancoClientes.length] = new Carrinho(user);
			bancoClientes[bancoClientes.length-1].listProdutos.push(produtos[posicao]);
			bancoClientes[bancoClientes.length-1].listProdutos[0].quantidade=parseInt(qtd);
			bancoClientes[bancoClientes.length-1].listProdutos[0].precoFinal=(bancoClientes[bancoClientes.length-1].listProdutos[0].preco * qtd)*(12.5*(bancoClientes[bancoClientes.length-1].listProdutos[0].peso/1000));
		

		$(document).ready(function(){
			$('#detalhe').hide();
			$('#entrar').hide();
			$('#carrinho').hide();
			$('#container').show();
		});

	

		for (var i = document.getElementById('tableCarrinho').rows.length; i > 1; i--) {
					apagaLinha(i-1);
		}	

		inserirCarrinho(bancoClientes[bancoClientes.length-1].listProdutos[0]);
		
			valorCompra+=bancoClientes[bancoClientes.length-1].listProdutos[0].precoFinal;
			quantidadeDeItem+=bancoClientes[bancoClientes.length-1].listProdutos[0].quantidade;
			document.getElementById('valTotal').innerHTML= "Valor Total Da compra "+ valorCompra;
			document.getElementById('iconeCar').text = quantidadeDeItem;

//se ele tiver cadastrado pega o produto cadastrado e coloca no carrinho na posição que achou no banco de clientes 
		}else{
			bancoClientes[nomeNoBanco].listProdutos.push(produtos[posicao]);
			bancoClientes[nomeNoBanco].listProdutos[bancoClientes[nomeNoBanco].listProdutos.length-1].quantidade=parseInt(qtd);
			bancoClientes[nomeNoBanco].listProdutos[bancoClientes[nomeNoBanco].listProdutos.length-1].precoFinal=(bancoClientes[nomeNoBanco].listProdutos[bancoClientes[nomeNoBanco].listProdutos.length-1].preco * qtd)*(12.5*(bancoClientes[nomeNoBanco].listProdutos[bancoClientes[nomeNoBanco].listProdutos.length-1].peso/1000));
			$(document).ready(function(){
				$('#detalhe').hide();
				$('#entrar').hide();
				$('#carrinho').hide();
				$('#container').show();
			});

			for (var i = document.getElementById('tableCarrinho').rows.length; i > 1; i--) {
					apagaLinha(i-1);
		}
		

		for (var i = 0; i < bancoClientes[nomeNoBanco].listProdutos.length; i++) {
			inserirCarrinho(bancoClientes[nomeNoBanco].listProdutos[i]);
			valorCompra+=bancoClientes[nomeNoBanco].listProdutos[i].precoFinal;
			quantidadeDeItem+=bancoClientes[nomeNoBanco].listProdutos[i].quantidade;
			document.getElementById('valTotal').innerHTML= "Valor Total Da compra "+valorCompra;
			document.getElementById('iconeCar').text = quantidadeDeItem;

		}
	
		}

	}
	alert("Adicionado ao carrinho com sucesso");
}

}

//função onde o usuario escolhe continua comprando , ao clicar ele ira exibir a tela principal , com o catalogo de produtos
function continuarCompra(){

	$(document).ready(function(){
			$('#carrinho').hide();
			$('#detalhe').hide();
			$('#container').show();
			$('#entrar').hide();
			$('#calculoTotal').show();
			$('#valTotal').hide();

	});
}

//Função para mostrar detalhes do produto clicado na tela principal
function detalsProduto(value) {

	var posicao=  parseInt(value.id);

	$(document).ready(function(){
		$('#container').hide();
		$('#entrar').hide();
		$('#detalhe').show();
		$('#detalhe').empty();
//col-sm-* para dispositivos com largura de tela entre 768 e 991 pixels.
//col-xs-* para dispositivos com largura de tela menor 768


	$('#detalhe').append('<div class="col-sm-6 col-xs-6">'+ 
				'<div class="card-product" >'+ 
					produtos[posicao].foto+ 
					
					'<p class="productTitle text-center">'+"Produto: "+produtos[posicao].nome+'</p>'+ 
					'<p class="descTitle text-center">'+"Descrição: "+produtos[posicao].descricao+'</p>'+ 
					'<p class="text-center" id="detalsPreco'+posicao+'">'+"Preço: R$ "+produtos[posicao].preco+",00"+'</p>'+ 
					'<p class="text-center" id="detalsPeso'+posicao+'">'+"Peso: "+produtos[posicao].peso+"g"+'</p>'+ 
						'<form name="formDetalhe">'+
						'Quantidade:<input type=number min="1" name="cardQtd'+posicao+'">'+'<br/>'+
					'<input type=button name="'+posicao+'" id="comprar'+posicao+'" value="Adicionar No Carrinho" onClick="addCarinho(this)">'+
					'<input type=button id="detals'+posicao+'" value="Voltar para Pagina" onClick="voltaPagina()">'+
					'</form>'+
				'</div>'+ 
			'</div>'+ 
		'')

	});



}

$(document).ready(function(){


	$('#detalhe').hide();
	$('#carrinho').hide();
	$('#entrar').hide();
		for (var i = 1; i <= produtos.length; i++) {
			$('#container').append('<div class="col-sm-3 col-xs-6">'+ 
				'<div class="card-product" >'+ 
					produtos[i-1].foto+ 
					'<p class="productTitle text-center">'+produtos[i-1].nome+'</p>'+ 
					'<p class="text-center" id="cardPreco'+i+'">'+"R$ "+produtos[i-1].preco+",00"+'</p>'+ 
						'<form name="formProduto">'+
					'<input type=button id="'+(i-1)+'" value="Comprar" onClick="detalsProduto(this)">'+
					'</form>'+
				'</div>'+ 
			'</div>'+ 
		'')}

//Função pra visualizar o carrinho de compra de um cliente logado
//se ele não tiver logado ele avisa e não mostra o carrinho
	$("#iconeCar").click(function(){
		var itens=parseInt(document.getElementById('iconeCar').text);
			if(itens ===0){
				alert("O carrinho está Vazio! Realize Uma compra!");
			}else{
				
				$('#detalhe').hide();
				$('#entrar').hide();
				$('#container').hide();
				$('#carrinho').show();
				$('#valTotal').hide();

			}
			
	});

//Função do botão sair
	$("#sair").click(function(){
		document.getElementById('iconeCar').text = 0;
		document.getElementById('entrarUser').innerHTML = "Entrar";		
			$('#detalhe').hide();
			$('#entrar').hide();
			$('#carrinho').hide();
			$('#container').show();
	});

//Função para um usuario entrar no sistema
	$("#entrarUser").click(function(){
		$('#detalhe').hide();
		$('#container').hide();
		$('#carrinho').hide();
		$('#entrar').show();	
	});	
$("#calculoTotal").click(function(){
		$('#calculoTotal').hide();
		$('#valTotal').show();
			
	});	



});