<?php get_header(); 
	$contact = get_pages(array( 'include' =>'8'));
	$vision = get_pages(array( 'include' =>'10'));
	$info = get_pages(array( 'include' =>'6'));
	$overall = get_pages(array( 'include' =>'12'));
?>
	<!-- banner start -->
	<!-- ================ -->
	<div id="banner" class="banner">
		<div class="banner-top">
			<div class="container">
				<div class="row">	
					<div class="col-xs-5 col-sm-6 toggle_vision top_menu">Vision & Concept</div>
					<div class="col-xs-2 visible-xs-inline"></div>
					<div class="col-xs-5 col-sm-6 toggle_info right top_menu">Info & Contact</div>
				</div>
			</div>
		</div>
		<div class="banner-image"></div>
		<div class="banner-caption">
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 object-non-visible text-center" data-animation-effect="fadeIn">
						<h1 class="text-center hide">The<br>Exposed</h1>
						<img class="main_logo" src="<?php echo get_template_directory_uri(); ?>/img/logo_home.png" alt="">
					</div>
				</div>
			</div>
		</div>
		<div class="banner-bottom">		
			<p class="text-center">A publishing plattform <br class="visible-xs">for young artists<br>exploring the boundaries <br class="visible-xs">of their medium </p>
		</div>
	</div>
	<!-- banner end -->

	<!-- section Vision+Concept start -->
	<!-- ================ -->
	<div id="vision" class="section clearfix object-non-visible" data-animation-effect="fadeIn">
		<div class="banner-top">
			<div class="container">
				<div class="row section_top">	
					<div class="col-xs-4 toggle_vision"><img class="cross" src="<?php echo get_template_directory_uri(); ?>/img/icons/cross.png" alt=""></div>				
					<div class="col-xs-8 toggle_info right top_menu">Info & Contact</div>
					<div class="col-md-12 text-center">
						<h2  class="title text-center hide">The Exposed</h2>
						<img class="second_logo" src="<?php echo get_template_directory_uri(); ?>/img/second_logo.png" alt="">
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center">
					
					<div class="visible-xs-block ">
						<div class="scrollable_area">
							<div class="row section_content scrollable_element">
								<div class="col-xs-12">
									<h3 class="title text-center"><?php echo $vision[0]->post_title;?> </h3>
									<div class="left"><?php echo apply_filters('the_content', $vision[0]->post_content);?></div>
								</div>
								<div class="col-xs-12">
									<h3 class="title text-center"><?php echo $overall[0]->post_title;?></h3>
									<div class="left"><?php echo apply_filters('the_content', $overall[0]->post_content);?></div>
								</div>
							</div>
						</div>
					</div>
					<div class="hidden-xs">
						<div class="row section_content scrollable_area">
							<div class="col-md-6 col-xs-12 scrollable_element">
								<h3 class="title text-center"><?php echo $vision[0]->post_title;?> </h3>
								<div class="left"><?php echo apply_filters('the_content', $vision[0]->post_content);?></div>
							</div>
							<div class="col-md-6 col-xs-12 scrollable_element">
								<h3 class="title text-center"><?php echo $overall[0]->post_title;?></h3>
								<pdiv class="left"><?php echo apply_filters('the_content', $overall[0]->post_content);?></div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>	
	<!-- section Vision+Concept end -->

	<!-- section Info+Contact start -->
	<!-- ================ -->
	<div id ="info" class="section clearfix object-non-visible" data-animation-effect="fadeIn">
		<div class="banner-top">
			<div class="container">
				<div class="row section_top">	
					<div class="col-xs-10 toggle_vision top_menu">Vision & Concept</div>					
					<div class="col-xs-2  toggle_info right"><img  class="cross" src="<?php echo get_template_directory_uri(); ?>/img/icons/cross.png" alt=""></div>
					<div class="col-md-12 text-center">
						<h2 class="title text-center hide">The Exposed</h2>
						<img class="second_logo" src="<?php echo get_template_directory_uri(); ?>/img/second_logo.png" alt="">
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center">
					<div class="visible-xs-block ">
						<div class="scrollable_area">
							<div class="row section_content scrollable_element">
								<div class="col-xs-12">
									<h3 class="title text-center "><?php echo $info[0]->post_title;?> </h3>
									<div class="left "><?php echo apply_filters('the_content', $info[0]->post_content);?></div>
								</div>
								<div class="col-xs-12">
									<h3 class="title text-center "><?php echo $contact[0]->post_title;?></h3>
									<div class="left"><?php echo apply_filters('the_content', $contact[0]->post_content);?></div>
								</div>
							</div>
						</div>
					</div>
					<div class="hidden-xs">
						<div class="row section_content scrollable_area">
							<div class="col-md-6 col-xs-12 scrollable_element ">
								<h3 class="title text-center "><?php echo $info[0]->post_title;?> </h3>
								<div class="left "><?php echo apply_filters('the_content', $info[0]->post_content);?></div>
							</div>
							<div class="col-md-6 col-xs-12 scrollable_element ">
								<h3 class="title text-center "><?php echo $contact[0]->post_title;?> </h3>
								<div class="left"><?php echo apply_filters('the_content', $contact[0]->post_content);?></div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>	
	<!-- section Info+Contact end -->	

<?php get_footer(); ?>
