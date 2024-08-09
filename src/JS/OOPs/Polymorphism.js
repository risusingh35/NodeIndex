const Polymorphism = () => {
    console.log('Polymorphism');
    class User {
        constructor(name) {
            this.name = name
        }
        notify(message) {
            return `Hi ${this.name} you have a new message:- /n${message}`
        }
    }
    class EmailUser extends User {
        constructor(name, email) {
            super(name)
            this.email = email
        }
        notify(message) {
            return `Hi a new email sent to:${this.email}: ${message}`
        }
    }
    class SmsUser extends User {
        constructor(name, phoneNo) {
            super(name)
            this.phoneNo = phoneNo
        }
        notify(message) {
            return `Hy new message sent to ${this.phoneNo} :${message}`
        }
    }

    const users = [
        new EmailUser("Alice", "alice@example.com"),
        new SmsUser("Bob", "123-456-7890"),
      ];
      console.log({users});
      
      users.forEach(user => {
        console.log({user});
        
        console.log(user.notify("You have a new message."));
      });
}
export { Polymorphism }