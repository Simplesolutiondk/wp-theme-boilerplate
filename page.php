<?php get_header(); ?>
<div>
    <div>
        <div class="content-cl">
            <div class="post">
                <?php
                if ( have_posts() ) {
                    while ( have_posts() ) {
                        the_post();
                        echo the_title('<h1>', '</h1>');
                        echo the_content();
                    }
                }
                ?>
            </div>
        </div>
    </div>
</div>
<?php get_footer(); ?>
