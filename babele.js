Hooks.on('init', () => {
  
  if (typeof Babele !== 'undefined') {
    Babele.get().register({
      module: 'pbta-fantasy-world-ptbr',
      lang: 'pt-BR',
      dir: 'compendium'
    })
  }
  
})

