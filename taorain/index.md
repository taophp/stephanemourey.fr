---
layout: default
---
<div class="card-columns">
	{% for post in site.posts %}
		<div class="card text-center card-inverse">
			<a href="{{ post.url }}" title="Lire">
				<img class="card-img-top" src="{{ post.img }}">
				<div class="card-block">
					<h2 class="card-title">{{ post.title }}</h2>
					<p class="card-text">{{ post.desc }}</p>
				</div>
			</a>
		</div>
	{% endfor %}
</div>
