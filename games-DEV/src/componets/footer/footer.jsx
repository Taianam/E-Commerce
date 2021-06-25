import React from "react";
import "./Footer.css";
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
function Footer() {
  return (
    <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>GAMES-DEV</h4>
  	 			<ul>
  	 				<li><a href="https://api.whatsapp.com/send?phone=5521980075046" target="_blank">Taiana</a></li>
  	 				<li><a href="https://api.whatsapp.com/send?phone=5521976445596" target="_blank">Sthephanie</a></li>
  	 				<li><a href="https://api.whatsapp.com/send?phone=5521997920177" target="_blank">Gustavo</a></li>
  	 				<li><a href="https://api.whatsapp.com/send?phone=5521984530242" target="_blank">Giovanne</a></li>
             <li><a href="#">Giulia</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Precisa de Ajuda?</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Envio</a></li>
  	 				<li><a href="#">Devolução</a></li>
  	 				<li><a href="#">Opções de Pagamento</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Games Shop</h4>
  	 			<ul>
  	 				<li><a href="#">PS5</a></li>
  	 				<li><a href="#">PS4</a></li>
  	 				<li><a href="#">Nintendo Switch</a></li>
  	 				<li><a href="#">Xbox S|X</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Siga a gente!</h4>
  	 			<div class="social-links">
  	 				<a href="https://www.facebook.com/" target="_blank"><FaFacebookF /></a>
  	 				<a href="https://twitter.com/home" target="_blank"><FaTwitter /></a>
  	 				<a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a>
  	 				<a href="https://web.whatsapp.com/" target="_blank"><FaWhatsapp /></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  );
}

export default Footer;