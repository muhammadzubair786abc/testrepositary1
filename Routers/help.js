Router.get('/',(req,resp)=>{
    resp.render('index.ejs')
})
// insert data
Router.post('/add',(req,resp)=>{
    const name=req.body.name;
    const email=req.body.email;
    const club=new Club({
        name,
        email
    })
   club.save(err=>{
    if(err){
        console.log('Data is not Post')
    }else{
        resp.redirect('/')
    }
   })
})
//find data

Router.get('/show',(req,resp)=>{
    Club.find((err,docs)=>{
        if(err) throw err;
        resp.render('show.ejs', {students: docs})
    })
})

// update data

Router.get('/edit/:id',(req,resp)=>{
    Club.findOneAndUpdate({_id: req.params.id},req.body,{new: true},(err,docs)=>{
        if(err){
            console.log('Data is not Upadtaed')
        }else{
            resp.render('edit.ejs',{ studentdata: docs})
        }
    })
})

Router.post('/edit/:id',(req,resp)=>{
    Club.findByIdAndUpdate({_id: req.params.id},req.body,(err,docs)=>{
        if(err){
            console.log('Data is not Posted')
        }else{
            resp.redirect('/show')
        }
    })
})



// Del data 

Router.get('/delete/:id',(req,resp)=>{
    Club.findByIdAndDelete({_id: req.params.id},req.body,(err,docs)=>{
        if(err){
            console.log("Record is not deleted")
        }else{
            resp.redirect('/show')
        }
    })
})

