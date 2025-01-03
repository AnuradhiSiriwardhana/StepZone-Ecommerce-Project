package edu.icet.service;

import edu.icet.dto.Item;
import edu.icet.dto.Item;

import java.util.List;

public interface ItemService {
    List<Item> getAll();
    void addCustomer(Item item);
    void updateCustomer(Item item);
    void deleteCustomer(Integer id);

    void addItem(Item item);

    void updateItem(Item item);

    void deleteItem(Integer id);
}
