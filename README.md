
WESTORE.
==
The westerosi alternative to amazon.com
--

This is a simple online-fictional-store, made with plain HTML5, CSS3, Javascript,
and the magic of Jquery and Ajax.
Its made to be used with
the GreenRonin books of the Ice and Fire RPG game
(Game of Thrones edition), but feel free use it
in another context.

I'm planning on doing some accounts/security/logins work later
so we can have the GameMaster managin accounts of the rest
of the party, so he can control the money their
player-friends are constantly spending in this store.
But for now, the store is as simple as it is.

**With Westore you can:**

- Register (not yet implemented)
- Set the name, money your character have.
- Choose an item and buy it.  
- Or add that item and others
to the cart if you want to buy more than one.
- Then you can buy the items in your cart.
- If you want you can add more money from your adventures
into your character, but beware of morality issues.
- You can search for specific named items
- You can search items by filters

**Maybe in the future**:

- GM managment tool to set money for party members
- GM managment tool to set specific prices for
specific items in specific situations
(i.e. war time = higher prices,
known vendor = cheapest items, etc.)
- Search for latest buyed items.
- Search for items bought by other members of the party
- Analitics (maybe someday my friends, someday...)


Obviusly, its open-sourced,
so the rest of the info is for developers
who want to organize their heads and simply
understand our code to change it, make it better,
love it, give us money, work with us,
have a beer with us, whatever you want to do,
the code and the knowledge is all yours!

**Developing info**


WESTORE (module)
--

	PRIVATE VARIABLES:
		*-- stock
		*-- shoppingHistory

	METHODS:
		*-- setDefaultStock()
		*-- setStock()
		*-- addToStock()
		*-- removeFromStock()
		*-- getStock()
		*-- getStockItems()
		*-- getStockItemsByCat()
		*-- getStockItemByName()
		*-- createItem()
		*-- createItemsFromJSON()

USER (object)
--
	PRIVATE VARIABLES:
		*-- shopingCart
		*-- inventory
		*-- shopingHistory

	PROTOTYPE METHODS:
		*-- save()
		*-- addToCart()
		*-- removeFromCart()
		*-- getShopingCart()
		*-- buyItem()
		*-- buyItemsInCart()
		*-- getInventory()
		*-- getInventoryItem()
		*-- getInventoryItemsByCategory()
		*-- updateShopingHistory()
		*-- cleanShopingHistory()
		*-- getShopingHistory()
		*-- ()
		*-- ()

ITEM (object)
--
	ATRIBUTTES
		*-- id
		*-- defaultPrice
		*-- itemName
		*-- description
		*-- category
		*-- id
		*-- quality
		*-- quantity

	PROTOTYPE METHODS:
		*-- getOptions()
		*-- setOptions()
			*-- get$()
			*-- set$()


-----------------  
(NOT YET IMPLEMENTED)

GAMEMASTER (object)
==

(NOT YET IMPLEMENTED)

-----------------  


	PRIVATE VARIABLES:
		*-- partyMembers
		*-- westores
		*-- specialItems

	*--- FOR USER PROTOTYPE METHODS:
		*-- addMoneyForUsers()
		*-- removeMoneyFromUsers()
		*-- addLootForUsers()
		*-- removeLootFromUsers()
		*-- 

	*--- FOR ITEM PROTOTYPE METHODS:
		*-- 










