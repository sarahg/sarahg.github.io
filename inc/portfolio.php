<?php

class PortfolioRow
{

  public function __construct($group, $items) {
    $item_markup = '';
    foreach ($items['items'] as $name => $deets) {
      $item = new stdClass();

      $item->name = $name;
      $item->machine_name = strtolower(str_replace(' ', '', $name));

      $item->notes = $deets['notes'];
      $item->url = $deets['url'];
      $item->years = $deets['years'];

      $item_markup .= $this->renderItem($item);
    }
    $this->renderGroup($group, $items['title'], $item_markup);
  }

  private function renderItem($item) {
    $output[] = '<div class="portfolio-item col-md-4"><div class="row">';
    $output[] = '<a href="'. $item->url .'" target="_blank"><img src="/img/projects/' . $item->machine_name . '.png" width="300px" height="205px"></a>';
    $output[] = '<p><span class="label label-success">'. $item->years .'</span> ' . $item->notes . '</p>';
    $output[] = '</div></div>';
    return implode(PHP_EOL, $output);
  }

  private function renderGroup($group, $title, $item_markup) {
    $output[] = '<div class="portfolio-group row">';
    $output[] = '<h2>' . $group . '</h2>';
    $output[] = '<p class="title">Job title: '. $title . '</p>';
    $output[] = $item_markup;
    $output[] = '</div>';
    echo implode(PHP_EOL, $output);
  }

}

$items = array(
  'Advomatic' => array(
    'title' => 'Developer',
    'items' => array(
      'ACLU' => array(
        'url' => 'https://www.aclu.org',
        'notes' => ' ACLU\'s new Drupal 7 site. I worked on back-end development and site building with an agile project team.',
        'years' => '2014-2015'
      ),
      'Education USA' => array(
        'url' => 'https://educationusa.state.gov',
        'notes' => 'A government website for international students and academic professionals. I worked on back-end development, front-end development and site building.',
        'years' => '2014-2015'
      ),
      'Advomatic' => array(
        'url' => 'https://www.advomatic.com',
        'notes' => 'Advomatic.com, our WordPress site. I\'m the lead developer on this and handle technical planning, back-end development and maintenance.',
        'years' => '2014-2015'
      )
    )
  ),
  'American Public Media' => array(
    'title' => 'Web Developer',
    'items' => array(
      'Marketplace' => array(
        'url' => 'http://www.marketplace.org',
        'notes' => 'Website for the public radio program <em>Marketplace</em>. I was the primary back-end developer and implemented new functionality for <a href="http://www.marketplace.org/shows/marketplace-weekend">Marketplace Weekend</a>.',
        'years' => '2013-2014'
      )
    )
  ),
  'Science Museum of Minnesota' => array(
    'title' => 'Multimedia Designer',
      'items' => array(
      'Science Buzz' => array(
        'url' => 'http://www.sciencebuzz.org',
        'notes' => 'Science Museum website for engaging museum and online visitors with up-to-date science content and interactive activities. I was the primary developer/themer/maintainer of this Drupal 6 site.',
        'years' => '2009-2013'
      ),
      'NISE Network' => array(
        'url' => 'http://www.nisenet.org',
        'notes' => 'A Drupal 6 website for informal science educators to share nanotech-related programs, activities and exhibit materials. I was the primary developer/themer/maintainer. (The site has since been rebuilt in Drupal 7 and rethemed.)',
        'years' => '2009-2013'
      ),
      'What is Nano' => array(
        'url' => 'http://www.whatisnano.org',
        'notes' => 'A Drupal 7 website aimed at sharing educational nanotech resources with the public, a companion piece to the <em><a href="http://whatisnano.org/nano-exhibit">Nano</a></em> mini-exhibit. I did most of the back-end Drupal work and implemented the custom theme.',
        'years' => '2010-2013'
      )
    )
  ),
  'Personal &amp; freelance' => array(
    'title' => '¯\_(ツ)_/¯',
    'items' => array(
      'State Fair Bingo' => array(
        'url' => 'http://www.statefairbingo.com',
        'notes' => 'Work-in-progress: a Drupal-based Bingo game to play on your smartphone at the Minnesota State Fair.',
        'years' => '2015'
      ),
      'Booziest' => array(
        'url' => 'http://booziest.beer',
        'notes' => 'PHP application built with the Silex micro-framework and AJAX. Taps into the <a href="https://untappd.com/api/docs">Untappd API</a> for data.',
        'years' => '2015'
      ),
      'SPACE Audio Descriptions' => array(
        'url' => 'http://www.spaceexhibit.org/ad',
        'notes' => 'Single-page PHP app for sharing exhibit audio descriptions with visitors who are blind or have low vision.',
        'years' => '2015'
      )
    )
  )
);

foreach ($items as $group => $items) {
  new PortfolioRow($group, $items);
}
