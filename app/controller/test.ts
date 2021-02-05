/*
 * @Author: hyy
 * @Date: 2021-01-20 10:33:44
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-29 13:20:45
 */
import  Controller  from './base_controller';

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx
    const page = ctx.query.page || 1
    const newList = await ctx.service.news.list(page)
    
    await ctx.render('test/list.tpl', {list:newList});
  }

  async get(){
    console.log('取数据了');
    
    const {ctx} = this
    const data = await ctx.service.test.getData()
    console.log('数据取出来了',data);
    
     ctx.body = data
  }

  async set(){
    const {ctx} = this
    const data = ctx.request.body
    console.log(data);
    const result =  await ctx.service.test.setDate(data)
    if(result){
      this.success('OK')
    }else{
      this.notFound('ERROR')
    }    
  }

  // 校验参数
  async create(){
    const {ctx} = this
    const createRule = {
      title:{type:'string'},
      content:{type:'string'}
    }
    try{
      ctx.validate(createRule)
    }
    catch(err){
      ctx.logger.warn(err.errors)
      ctx.body = {success:false}
      return
    }
  }
}

module.exports = NewsController;

