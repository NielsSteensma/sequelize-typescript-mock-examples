require("module-alias/register")
import {Sequelize} from "sequelize-typescript";

export default class App{
    public async start() {
        const database = this.createSequelizeInstance();
        
        await database.sync();
      }

      createSequelizeInstance(): Sequelize{
        // For below way of setting the config to work, you need to set the target to es6 under compileroptions in tsconfig.json
        return new Sequelize({
          database: "127.0.0.1",
          dialect: "postgres",
          username: "notsosecret",
          password: "unicorn",
          omitNull: true,
          modelPaths: [__dirname + "/models"],
          modelMatch: (filename, member) => {
            return filename.substring(0, filename.indexOf(".model")) == member.toLowerCase();
          }
        })
      }
}

new App().start()