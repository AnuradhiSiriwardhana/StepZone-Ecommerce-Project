package edu.icet.service;

import edu.icet.dto.Item;
import edu.icet.entity.ItemEntity;
import edu.icet.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {

    private final ItemRepository repository;
    private final ModelMapper mapper;

    @Override
    public List<Item> getAll() {
        List<Item> itemList = new ArrayList<>();
        repository.findAll().forEach(entity ->
                itemList.add(mapper.map(entity, Item.class))
        );
        return itemList;
    }

    @Override
    public void addCustomer(Item item) {

    }

    @Override
    public void updateCustomer(Item item) {

    }

    @Override
    public void deleteCustomer(Integer id) {

    }

    @Override
    public void addItem(Item item) {
        if (item != null) {
            repository.save(mapper.map(item, ItemEntity.class));
        }
    }

    @Override
    public void updateItem(Item item) {
        if (item != null && item.getId() != null) {
            repository.save(mapper.map(item, ItemEntity.class));
        }
    }

    @Override
    public void deleteItem(Integer id) {
        if (id != null) {
            repository.deleteById(id);
        }
    }
}
