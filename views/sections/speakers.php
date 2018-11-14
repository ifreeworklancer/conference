<!-- Speakers -->
<section id="speakers">
    <div class="container">
        <div class="row mb-5">
            <div class="col-12">
                <h2 class="section-title section-title--right">
                    <?= $speakers['title'] ?>
                </h2>
                <h1 class="section-subtitle">
                    <?= $speakers['title'] ?>
                </h1>
            </div>
        </div>
        <div class="row justify-content-center align-items-center">
            <?
                foreach ($speakers['items'] as $item) 
                { 
                    echo '<div class="col-sm-10 col-lg-6">'
                    
                            .'<div class="speaker-card">' 

                                .'<div class="speaker-card-img" style="background-image: url(' . $item['image'] . ');"></div>'

                                . '<div class="speaker-card-main">' 

                                    .'<h3 class="name">' . $item['name'] . '</h3>'

                                    .'<div class="position">' . $item['position'] . '</div>'

                                .'</div>'
                        
                            .'</div>'

                        .'</div>';
                } 
            ?>
        </div>
    </div>
</section>