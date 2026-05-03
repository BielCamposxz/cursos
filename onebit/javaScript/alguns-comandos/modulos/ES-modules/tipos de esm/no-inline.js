function group() {
    console.log('export nomeado nao-inline (agrupado)')
}

function exportDefault() {
    console.log('export default nao inline')
}

export { group }

export default exportDefault