const table = document.getElementById('table')

window.addEventListener('keydown',function(e){
    table.innerHTML = `
    <table id="keyDetails">
        <tbody>
            <tr>
                <th>Key</th>
                <th>Key Type</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key === ' ' ? 'Space' : e.key}</td>
                <td>${e.type}</td>
                <td>${e.code}</td>
            </tr>
        </tbody>
    </table>
    `
})