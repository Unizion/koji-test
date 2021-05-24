
import React from 'react';

function articlelist(props) {
	
	function toArticle(){
		
	}
	return(
		<div>
			{
				props.articles.map((data,index) =>
				<div key={index} onClick={toArticle} data={data}>
					{data.title}
				</div>
				)
			}
			
		</div>

	)

}

export default articlelist;