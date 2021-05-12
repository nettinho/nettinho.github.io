$(window).scroll(function () {
  let scrollTop = $(window).scrollTop()
  let topDivHeight = $(".timeline").height()
  let viewPortSize = $(window).height()

  const fadeZoneSize = 250
  const bottomLine = viewPortSize - fadeZoneSize;
  
  for( let div of $('.timeline-item') ){
    const divBottom = div.getBoundingClientRect().bottom
    const divTop = div.getBoundingClientRect().top
    const divPos = (divBottom + divTop) / 2

    const opacityValue = 
      divPos < 0 ? 0 :
      divPos < fadeZoneSize ? divPos * 100 / fadeZoneSize :
      divPos < bottomLine ? 100 :
      divPos > viewPortSize ? 0 :
      (viewPortSize - divPos) * 100 / fadeZoneSize
    
      $(div).css('opacity', `${opacityValue}%`)
  }
  const titlePosRect = $(".timeline-title")[0].getBoundingClientRect()
  const titlePos = (titlePosRect.top + titlePosRect.bottom) / 2

  const titleOpacity = (titlePos*100)/(viewPortSize/2)
  $(".timeline-title").css('opacity', `${titleOpacity}%`)
});