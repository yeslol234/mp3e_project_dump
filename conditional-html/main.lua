Account = {balance = 0, name = 0}

function Account:new (o, name) 
    o = o or {}
    setmetatable(o, self)
    self.__index = self
    return o
end

function Account:deposit (v)
    self.balance = self.balance + v
end

function Account:withdraw (v)
    if v > self.balance then error("insufficient funds") end
    self.balance = self.balance - v
end
function Account:register (name)
    if name == nil then error("invalid name") end
    self.name = name
end

acc = Account:new()
acc:register("john")
acc:deposit(math.random(1, 10))
print(acc.name)
