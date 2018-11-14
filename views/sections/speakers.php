<!-- Speakers -->
<section id="speakers">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="section-title section-title--right">
                    <?= $speakers['title'] ?>
                </h2>
                <h1 class="section-subtitle">
                    <?= $speakers['title'] ?>
                </h1>
            </div>
        </div>
        <div class="row justify-content-center align-items-start">
            <?
                foreach ($speakers['items'] as $item) 
                { 
                    echo '<div class="col-sm-6">'
                    
                            .'<div class="speakers-card">' 

                                .'<div class="speakers-card-img" style="background-image: url(' . $item['image'] . ');></div>'

                                . '<div class="speakers-card-main">' 

                                    .'<div class="name">' . $item['name'] . '</div>'

                                    .'<div class="position">' . $item['position'] . '</div>'

                                .'</div>'
                        
                            .'</div>'

                        .'</div>';
                } 
            ?>
        </div>
    </div>
</section>