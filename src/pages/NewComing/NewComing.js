			import React from 'react';
import { banimage } from '../Data/data';

			function New() {
			return ( 
			<div class="component container">
			<div className="row">
	{banimage.map(function(el,ele){
	return(      
		<ul class="align col-md-4">
		<li>
			<figure class='book'>
				<ul class='hardcover_front'>
					<li>
						<div class="coverDesign blue">
							<img key={ele}  src={el.image}/>
							<h1 key={ele}>{el.title}</h1>
							
						</div>
					</li>
					<li></li>
				</ul>
				<ul class='page'>
					<li></li>
					<li>
						<a class="btn" href="#">Дэлгэрэнгүй</a>
					</li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<ul class='hardcover_back'>
					<li></li>
					<li></li>
				</ul>
				<ul class='book_spine'>
					<li></li>
					<li></li>
				</ul>
				<figcaption>
				<h6 key={ele}>{el.author}</h6>
				      <span key={ele}>{el.genre}</span>
					
					<p key={ele}>{el.description}</p>
				</figcaption>
			</figure>
		</li>
	</ul>

	)
	})
	}
	</div> 
                      
					
			</div>
			);
			}

			export default New;